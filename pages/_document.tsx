import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Doc extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="static/image/icon.png" />
          <link rel="stylesheet" href="static/css/index.css" />
          <link rel="stylesheet" href="static/css/mobile.css" />
          {process.env["NODE_ENV"] === "development" ? (
            <link rel="stylesheet" href="static/css/dev.css" />
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
