import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-around",
    minWidth: "288px",
    minHeight: "360px",
    margin: "10px",
  },
  boxImg: {
    minHeight: "208px",
    minWidth: "208px",
    background: "url(img/Burger.jpg) center no-repeat",
  },
  boxButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  colorBlack: {
    color: "#000000",
    margin: "0px 2px 0px 2px"
  },
}));

export default useStyles;
