import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Doc extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>宝鐘マリンボタン🏴☠</title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="static/image/icon.png"></link>
          <link rel="stylesheet" href="static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="static/css/index.css" />
          <link rel="stylesheet" href="static/css/mobile.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
