import React from "react";
import ExternalLink from "../../components/ExternalLink";
import styled from "styled-components";

export default () => {
  return (
    <Footer>
      <article className="footer-bar-toolbar-cation">
        <span className="font-weight-bold">
          本ページはファン創作による非公式ページです。
          <br />
          問題点を見つけたら
          <ExternalLink
            href="https://twitter.com/hapo31_t"
            style={{ color: "blue" }}
          >
            作者のTwitter
          </ExternalLink>
          または
          <ExternalLink
            href="https://github.com/hapo31/marine_button/issues"
            style={{ color: "black" }}
          >
            GithubのIssue
          </ExternalLink>
          にご報告ください。
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
    </Footer>
  );
};

const Footer = styled.div`
  padding: 20px 0;
  font-family: "Nico Moji Plus", "Nico Moji", "Noto Sans JP";
  background-color: var(--marine-sub-color);
`;
