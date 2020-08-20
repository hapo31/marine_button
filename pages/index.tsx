import React from "react";
import Header from "../src/container/HeaderContainer/HeaderContainer";
import Footer from "../src/container/FooterContainer/FooterContainer";
import VoiceButtonsContainer from "../src/container/VoiceButtonsContainer/VoiceButtonsContainer";
// import NoticeSSRBannerContainer from "../src/container/NoticeSSRBannerContainer/NoticeSSRBannerContainer";

import { VoiceList } from "../src/state/AppState";
import AudioList2Store from "../src/utils/AudioList2Store";

import audioList from "../static/audiolist.json";
import { useDispatch } from "react-redux";
import useStyles from "src/theme/Styles";
import { useDidMount } from "src/hooks/useClassComponentLikeLifeCycle";
import { ApplyPageStylesAction } from "src/actions/AppActions";
import Notice from "src/components/Notice";
import ExternalLink from "src/components/ExternalLink";

import metainfo from "../static/metainfo.json";

const lastUpdated = new Date(metainfo.lastupdated);

type Props = {
  isStatic: boolean;
  voiceList: VoiceList;
};

export default (props: Props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useDidMount(() => {
    dispatch(ApplyPageStylesAction(classes));
  });

  return (
    <>
      <Header />
      <Notice style={{ fontSize: "30px", maxWidth: "100vw" }}>
        <div>
          <h1
            style={{
              margin: "0",
              textDecoration: "underline",
            }}
          >
            <p>Congratulations for 1st Anniversary!</p>
          </h1>
        </div>
        <div>
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
              href="http://cool-create.cc/cd/cccd60/"
            >
              <span style={{ color: "aqua" }}>#</span>
              <span style={{ color: "red" }}>幻想郷</span>
              <span style={{ color: "aqua" }}>ホロイズム</span>
            </ExternalLink>
          </span>
          <div>
            DLsite版は
            <ExternalLink
              style={{ textDecoration: "underline" }}
              href="https://www.dlsite.com/home/work/=/product_id/RJ291344"
            >
              こちら
            </ExternalLink>
            から
          </div>
        </div>
        <div>
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
        <div
          className="last-updated-info text-very-small"
          style={{ textAlign: "right" }}
        >
          last updated:
          {`${lastUpdated.getFullYear()}/${lastUpdated.getMonth() +
            1}/${lastUpdated.getDate()} `}
          Button count:{` ${metainfo.count}`}
        </div>
      </Notice>
      <VoiceButtonsContainer voiceList={props.voiceList} />
      <Footer />
    </>
  );
};

export async function getStaticProps(): Promise<{ props: Props }> {
  const voiceList = AudioList2Store(audioList);
  return {
    props: { isStatic: true, voiceList },
  };
}
