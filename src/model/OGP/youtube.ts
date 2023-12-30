import { OGPInfo } from "src/model/OGP/OGP";

export default async function fetchYoutubeChannelOGP(
  channelId: string
): Promise<OGPInfo> {
  const apiKey = process.env["YOUTUBE_API_KEY"];
  if (!apiKey) {
    return {
      image: "",
      title: "",
      url: "",
      description: "",
    };
  }

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
  );
  const json = await res.json();

  const [item] = json.items;

  const title = item.snippet.title;
  const image = item.snippet.thumbnails.medium.url;
  const description = item.snippet.description;
  const customUrl = item.snippet.customUrl;
  const url = customUrl
    ? `https://www.youtube.com/channel/${customUrl}`
    : `https://www.youtube.com/channel/${channelId}`;

  return {
    title,
    image,
    url,
    description,
  };
}
