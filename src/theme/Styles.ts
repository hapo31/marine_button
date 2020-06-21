import { makeStyles } from "@material-ui/core/styles";

const volumeContorollerHeight = "64px";

const useStyles = makeStyles({
  header: {
    fontFamily: `"Nico Moji Plus", "Nico Moji", "Noto Sans JP"`,
    backgroundColor: "var(--marine-sub-color)",
  },
  footer: {
    fontFamily: `"Nico Moji Plus", "Nico Moji", "Noto Sans JP"`,
    backgroundColor: "var(--marine-sub-color)",
    paddingBottom: volumeContorollerHeight,
  },

  volumeContoroller: {
    height: volumeContorollerHeight,
    margin: "auto",
    borderColor: "black",
    top: "initial",
    bottom: 0,
    fontFamily: `"Nico Moji Plus", "Nico Moji", "Noto Sans JP"`,
    backgroundColor: "var(--marine-sub-color)",
  },
});

export default useStyles;
