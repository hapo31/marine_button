import { OGPInfo } from "src/model/OGP/OGP";
import ExternalLink from "../../components/ExternalLink";

import styled from "@emotion/styled";
import OGP from "src/components/OGP";

type Props = {
  x: OGPInfo;
  youtube: OGPInfo;
};

export default function HeaderContainer({ x, youtube }: Props) {
  return (
    <Header className="app-header">
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

        <Nicomoji className="header-container-title">宝鐘マリンボタン</Nicomoji>
      </HeaderArticle>
      <OGPContainer>
        <OGP
          href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg"
          serviceIcon="static/image/youtube_social_icon_red.png"
          ogp={youtube}
          colorTheme={{
            color: "#ff0000",
            backgroundColor: "#000",
            fontColor: "#fff",
          }}
        />
        <OGP
          href="https://twitter.com/houshoumarine"
          ogp={x}
          serviceIcon="static/image/x-logo.svg"
          colorTheme={{
            color: "#000",
            backgroundColor: "#fff",
            fontColor: "#000",
          }}
        />
      </OGPContainer>
      <HeaderArticle>
        宝鐘マリンボタンを共有→
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-text="宝鐘マリンボタン 🏴☠ #マリンボタン"
          data-url="https://hapo31.github.io/marine_button/"
          data-show-count="false"
        >
          Tweet
        </a>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </HeaderArticle>
    </Header>
  );
}

const Header = styled.header`
  font-family: "Nico Moji Plus", "Nico Moji", "Noto Sans JP";
  color: black;
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
  padding: 10px;
`;

const Logo = styled.img`
  object-fit: contain;
  vertical-align: top;
`;

const OGPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 5px 7px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
