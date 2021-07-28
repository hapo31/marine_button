/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

require("dotenv").config();

const open = require("open");
const fetch = require("node-fetch");
const fs = require("fs/promises");
const format = require("date-fns/format");
const path = require("path");

const { env } = process;

getFiles();

async function getFiles() {
  // get 'income' content
  const incomeDir = ".tmp/income";
  try {
    await fs.mkdir(incomeDir, { recursive: true });
  } finally {
    /* nop */
  }

  const ents = await fs.readdir(incomeDir, { withFileTypes: true });
  const files = ents
    .filter(e => e.isFile())
    .map(file => {
      let isValidFileName = false;
      let fileName = file.name;
      const match = fileName.match(/(\d+)_(.*)(\s-\s)(.*)(\.mp3)$/);
      if (match) {
        const [, date, body, , name, ext] = match;
        fileName = `${date}_${body}${ext}`;
        isValidFileName = true;
      } else {
        // 形式が守られてないファイルへの対処
        const match = fileName.match(/([^ ]*)\s-\s.*\.mp3$/);
        if (match) {
          const [, body] = match;
          const dateStr = format(new Date(), "YYYYMMDD");
          fileName = `${dateStr}_${body}.mp3`;
        }
      }
      return {
        name: fileName,
        src: path.join(incomeDir, file.name),
        isValidFileName,
      };
    });

  try {
    fs.mkdir(".tmp/invalid/", { recursive: true });
  } finally {
    /* nop */
  }

  await Promise.all(
    files.map(async file => {
      const arrayBuffer = await fs.readFile(file.src);

      if (file.isValidFileName) {
        return await fs.writeFile(
          `.tmp/${file.name}`,
          Buffer.from(arrayBuffer)
        );
      } else {
        return await fs.writeFile(
          `.tmp/invalid/${file.name}`,
          Buffer.from(arrayBuffer)
        );
      }
    })
  );

  process.exit(0);
}
