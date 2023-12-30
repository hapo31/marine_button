import { parseFromString, Dom } from "dom-parser";
import { writeFile } from "fs/promises";

export type OGPInfo = {
  title: string;
  url: string;
  image: string;
  description: string;
};

export async function fetchOGP(srcUrl: string): Promise<OGPInfo> {
  const res = await fetch(srcUrl, {
    headers: {
      "User-Agent":
        "bot " +
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    },
  });
  const html = await res.text();
  const doc = parseFromString(
    html.substring(html.indexOf("<head>"), html.indexOf("</head>") + 7)
  );

  const meta = getMeta(doc);

  const title = meta["title"] ?? "";
  const url = meta["url"] ?? "";
  const image = meta["image"] ?? "";
  const description = meta["description"] ?? "";

  return {
    title,
    url,
    image,
    description,
  };
}

function getMeta(dom: Dom) {
  const meta = dom.getElementsByTagName("meta");
  const ogp = meta.filter((m) => m.getAttribute("property")?.startsWith("og:"));

  return Object.fromEntries(
    ogp.map((m) => [
      m.getAttribute("property").replace("og:", ""),
      m.getAttribute("content"),
    ])
  );
}
