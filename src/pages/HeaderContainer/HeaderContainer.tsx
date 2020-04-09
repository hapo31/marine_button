import React, { memo } from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "react-bootstrap";

export default () => {
  const TweetButton = memo(
    () => (
      <div className="tweet-button">
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
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    ),
    () => true
  );

  return (
    <header>
      <iframe
        src="audio/silence.wav"
        allow="autoplay"
        style={{ display: "none" }}
      ></iframe>

      <a
        className="fork-me-on-github"
        href="https://github.com/happou31/marine_button"
        target="_blank"
        rel="noopener"
      >
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>

      <Nav className="navbar navbar-expand-lg">
        <Navbar className="navbar-nav">
          <NavItem className="mb-0 text-large wf-nicomoji">
            宝鐘マリンボタン
          </NavItem>
          <NavItem className="social-icon-container">
            <a
              className="social-icon-youtube"
              href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
              target="_blank"
              rel="noopener"
            >
              <img
                src="image/youtube_social_icon_red.png"
                alt="
          Marine Ch. 宝鐘マリン"
              />
            </a>
          </NavItem>
          <NavItem className="social-icon-container">
            <a
              className="social-icon-twitter"
              href="https://twitter.com/houshoumarine"
              target="_blank"
              rel="noopener"
            >
              <img
                src="image/Twitter_Logo_Blue.svg"
                alt="
            宝鐘マリン🏴‍☠️＠ホロライブ3期生"
              />
            </a>
          </NavItem>
        </Navbar>
      </Nav>
      {TweetButton}
    </header>
  );
};
