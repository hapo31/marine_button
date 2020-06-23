import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

const volumeContorollerHeight = "64px";

const mainColor = "rgb(160, 45, 58)";
const primaryColor = "rgb(192, 98, 102)";
const subColor = "rgb(164, 109, 79)";

const textSize = {
  textLarge: {
    fontSize: "52px",
  },
  textMid: {
    fontSize: "28px",
  },
  textSmall: {
    fontSize: "16px",
  },
  textVerySmall: {
    fontSize: "10px",
  },
};

const useStyles = makeStyles({
  ...textSize,

  nicomoji: {
    display: "inline",
    fontFamily: "Nico Moji Plus",
  },

  header: {
    fontFamily: `"Nico Moji Plus", "Nico Moji", "Noto Sans JP"`,
    color: "black",
    margin: "5px",
  },

  headerArticle: {
    marginBottom: "10px",
    verticalAlign: "center",
  },
  headerContainer: {
    alignContent: "center",
    height: "80px",
  },

  headerItem: {
    display: "flex-box",
    verticalAlign: "top",
    justifyContent: "center",
    height: "52px",
    lineHeight: "52px",
  },

  siteLogo: {
    verticalAlign: "top",
  },

  headerSocialIconYoutube: {
    objectFit: "contain",
    display: "inline-block",
    height: "32px",
    marginTop: "12px",
  },

  headerSocialIconTwitter: {
    objectFit: "contain",
    display: "inline-block",
    width: "100%",
    height: "130%",
    marginTop: "-2px",
    marginLeft: "-50px",
    zIndex: 1,
  },

  footer: {
    fontFamily: `"Nico Moji Plus", "Nico Moji", "Noto Sans JP"`,
    backgroundColor: "var(--marine-sub-color)",
    paddingBottom: volumeContorollerHeight,
  },
  volumeContoroller: {
    height: volumeContorollerHeight,
    borderColor: "black",
    top: "initial",
    bottom: 0,
    fontFamily: `"Nico Moji Plus", "Nico Moji", "Noto Sans JP"`,
    backgroundColor: "var(--marine-sub-color)",
  },
});

export default useStyles;
