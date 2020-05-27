import React from "react";
import Helmet from "react-helmet";

export default () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title="宝鐘マリンボタン🏴☠"
    >
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="static/image/icon.png"></link>
      <link rel="stylesheet" href="static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="static/css/index.css" />
      <link rel="stylesheet" href="static/css/mobile.css" />
    </Helmet>
  );
};
