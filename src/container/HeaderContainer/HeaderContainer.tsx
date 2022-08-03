import ExternalLink from "../../components/ExternalLink";

import styled from "@emotion/styled";

export default function HeaderContainer() {
  return (
    <Header className="app-header">
      <div>
        <HeaderArticle>
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

          <Logo
            alt="宝鐘マリンボタン"
            className="site-logo"
            src="static/image/icon.png"
          />

          <Nicomoji className="header-container-title">
            宝鐘マリンボタン
          </Nicomoji>
        </HeaderArticle>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ExternalLink
          className="social-icon-youtube"
          href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
        >
          <YoutubeContainer>
            <img
              height="30px"
              src="static/image/youtube_social_icon_red.png"
              alt="Marine Ch. 宝鐘マリン"
            />
          </YoutubeContainer>
        </ExternalLink>

        <ExternalLink href="https://twitter.com/houshoumarine">
          <TwitterContainer>
            <img
              width="50px"
              height="50px"
              src="static/image/Twitter_Logo_Blue.svg"
              alt="
              宝鐘マリン🏴‍☠️＠ホロライブ3期生"
            />
          </TwitterContainer>
        </ExternalLink>
      </div>
      <HeaderArticle>
        トゥイッターで共有→
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-text="宝鐘マリンボタン 🏴☠ #マリンボタン"
          data-url="https://hapo31.github.io/marine_button/"
          data-show-count="false"
        >
          Tweet
        </a>
        <script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </HeaderArticle>
    </Header>
  );
}

const Header = styled.header`
  font-family: "Nico Moji Plus", "Nico Moji", "Noto Sans JP";
  color: black;
  margin: 5px;
`;

const Nicomoji = styled.h3`
  display: inline;
  font-size: 48px;
  font-family: "Nico Moji Plus";
  @media screen and (max-width: 500px) {
    font-size: 38px;
  }
`;

const HeaderArticle = styled.article`
  display: flex;
  height: 30px;
  align-items: center;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  object-fit: contain;
  vertical-align: top;
`;

const TwitterContainer = styled.div`
  object-fit: contain;
  display: inline-block;
`;

const YoutubeContainer = styled.div`
  object-fit: contain;
  display: inline-block;
  height: 32px;
`;
