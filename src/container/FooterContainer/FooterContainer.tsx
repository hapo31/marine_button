import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import ExternalLink from "../../components/ExternalLink";
import useStyles from "src/theme/Styles";

export default () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.footer} position="static">
      <Toolbar className="footer-bar-toolbar">
        <article className="footer-bar-toolbar-cation">
          <span className="font-weight-bold">
            本ページはファン創作による非公式ページです。
            <br />
            問題点を見つけたら
            <ExternalLink
              href="https://twitter.com/happou31"
              style={{ color: "blue" }}
            >
              作者のTwitter
            </ExternalLink>
            または
            <ExternalLink
              href="https://github.com/happou31/marine_button/issues"
              style={{ color: "black" }}
            >
              GithubのIssue
            </ExternalLink>
            にご報告ください。
            <br />
            ※ボタンにして欲しい声があればアーカイブのURLと再生位置と内容のリプライをください。
          </span>
        </article>
        <article className="footer-bar-toolbar-copyright">
          <ExternalLink
            className="copyright"
            href="https://www.hololive.tv/terms"
          >
            © cover corp. All Rights Reserved.
          </ExternalLink>
        </article>
      </Toolbar>
    </AppBar>
  );
};
