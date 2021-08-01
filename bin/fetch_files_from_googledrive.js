/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

require("dotenv").config();

const open = require("open");
const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs/promises");
const format = require("date-fns/format");

const server = express();

const { env } = process;
const clientId = env["GOOGLE_CLIENT_ID"];
const secret = env["GOOGLE_CLIENT_SECRET"];
const folderId = env["DRIVE_FOLDER_ID"];
const scope = encodeURIComponent(
  ["https://www.googleapis.com/auth/drive"].join(" ")
);

const tempDir = ".temp";

const redirectUri = encodeURIComponent("http://localhost:3000/redirect");

const oauthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;

let accessToken = env["ACCESS_TOKEN"];

if (accessToken == null || accessToken.length === 0) {
  open(oauthUrl);

  server.get("/redirect", async (req, response) => {
    const code = req.query["code"];
    if (code) {
      const getAccessTokenUrl = `https://oauth2.googleapis.com/token`;
      const res = await fetch(getAccessTokenUrl, {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `code=${code}&client_id=${clientId}&client_secret=${secret}&redirect_uri=${redirectUri}&grant_type=authorization_code`,
      });

      const oauthInfo = await res.json();
      response.write("OK\n\n");
      accessToken = oauthInfo["access_token"];
      console.log({ accessToken });
      await getFiles();
      return;
    }
  });

  server.listen(3000);
} else {
  getFiles();
}

async function getFiles() {
  const q = `'${folderId}' in parents and trashed = false`;
  const res = await fetchWithCredential(
    `https://www.googleapis.com/drive/v3/files?q=${q}`
  );
  const list = await res.json();
  const files = list.files
    .filter(file => file.mimeType === "audio/mpeg")
    .map(file => {
      let isValidFileName = false;
      let fileName = file.name;
      const match = fileName.match(/(\d+)_(.*)\s-\s.*\.mp3$/);
      if (match) {
        const [, date, body] = match;
        fileName = `${date}_${body}.mp3`;
        isValidFileName = true;
      } else {
        // 形式が守られてないファイルへの対処
        const match = fileName.match(/([^ ]*)\s-\s.*\.mp3$/);
        if (match) {
          const [, body] = match;
          const dateStr = format(new Date(), "yyyyMMdd");
          fileName = `${dateStr}_${body}.mp3`;
        }
      }
      return { name: fileName, id: file.id, isValidFileName };
    });
  try {
    fs.mkdir(`${tempDir}/invalid/`, { recursive: true });
  } finally {
    /* nop */
  }
  await Promise.all(
    files.map(async file => {
      const res = await fetchWithCredential(
        `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`
      );
      const arrayBuffer = await res.arrayBuffer();

      if (file.isValidFileName) {
        return await fs.writeFile(
          `${tempDir}/${file.name}`,
          Buffer.from(arrayBuffer)
        );
      } else {
        return await fs.writeFile(
          `${tempDir}/invalid/${file.name}`,
          Buffer.from(arrayBuffer)
        );
      }
    })
  );

  process.exit(0);
}
async function fetchWithCredential(url, opt) {
  return await fetch(url, {
    ...opt,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
