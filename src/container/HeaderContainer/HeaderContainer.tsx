import React from "react";
import { withPrefix } from "gatsby";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Static from "../../components/Static";
import Notice from "../../components/Notice";
import Link from "../../components/Link";

export default () => {
  return (
    <header>
      <Link
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
      </Link>

      <Nav className="navbar navbar-expand-lg">
        <Navbar className="navbar-nav">
          <NavItem className="mb-0 text-large wf-nicomoji">
            宝鐘マリンボタン
          </NavItem>
          <NavItem className="social-icon-container">
            <Link
              className="social-icon-youtube"
              href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
            >
              <img
                src={withPrefix("image/youtube_social_icon_red.png")}
                alt="
          Marine Ch. 宝鐘マリン"
              />
            </Link>
          </NavItem>
          <NavItem className="social-icon-container">
            <Link
              className="social-icon-twitter"
              href="https://twitter.com/houshoumarine"
            >
              <img
                src={withPrefix("image/Twitter_Logo_Blue.svg")}
                alt="
            宝鐘マリン🏴‍☠️＠ホロライブ3期生"
              />
            </Link>
          </NavItem>
        </Navbar>
      </Nav>
      <div className="tweet-button">
        <Static>
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
            船長チャンネル登録者数３０万人おめでとう！！！！！
          </div>
        </Notice>
      </div>
    </header>
  );
};
