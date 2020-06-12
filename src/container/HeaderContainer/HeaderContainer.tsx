import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Static from "../../components/Static";
import Notice from "../../components/Notice";
import ExternalLink from "../../components/ExternalLink";

export default () => {
  return (
    <header>
      <ExternalLink
        className="fork-me-on-github"
        href="https://github.com/happou31/marine_button"
      >
        <img
          width="120"
          height="120"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </ExternalLink>

      <Nav className="navbar navbar-expand-lg">
        <Navbar className="navbar-nav">
          <NavItem className="mb-0 text-large wf-nicomoji">
            <img alt="" className="site-logo" src="static/image/icon.png" />
            宝鐘マリンボタン
          </NavItem>
          <NavItem className="social-icon-container">
            <ExternalLink
              className="social-icon-youtube"
              href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
            >
              <img
                src={"static/image/youtube_social_icon_red.png"}
                alt="
          Marine Ch. 宝鐘マリン"
              />
            </ExternalLink>
          </NavItem>
          <NavItem className="social-icon-container">
            <ExternalLink
              className="social-icon-twitter"
              href="https://twitter.com/houshoumarine"
            >
              <img
                src="static/image/Twitter_Logo_Blue.svg"
                alt="
            宝鐘マリン🏴‍☠️＠ホロライブ3期生"
              />
            </ExternalLink>
          </NavItem>
        </Navbar>
      </Nav>
      <div className="tweet-button">
        <Static>
          トゥイッターで共有→
          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            className="twitter-share-button"
            data-text="宝鐘マリンボタン 🏴☠"
            data-url="https://happou31.github.io/marine_button/"
            data-show-count="false"
          >
            Tweet
          </a>
          <script
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Static>
      </div>
      <div>
        <Notice>
          <div style={{ fontSize: "30px", maxWidth: "100vw" }}>
            <span
              style={{
                textShadow: `
                1px 1px 0 #000,
               -1px 1px 0 #000,
               1px -1px 0 #000,
               -1px -1px 0 #000
               `,
              }}
            >
              <ExternalLink
                style={{ textDecoration: "underline" }}
                href="https://hibiki-radio.jp/description/skdw/detail"
              >
                <span style={{ color: "yellow" }}>V</span>
                <span style={{ color: "gray" }}>の</span>
                <span style={{ color: "aqua" }}>すこん</span>
                <span style={{ color: "gray" }}>な</span>
                <span style={{ color: "yellow" }}>オタ活</span>
                <span style={{ color: "maroon" }}>なんだワ</span>
                <span style={{ color: "gray" }}>！</span>
              </ExternalLink>
            </span>
            <br />
            響-RadioStationで隔週水曜日更新で大好評配信中！！！
          </div>
        </Notice>
      </div>
    </header>
  );
};
