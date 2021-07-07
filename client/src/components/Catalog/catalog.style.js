import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "nowrap",
    margin: "40px 0px 40px 0px",
    background: "#F7F6F5",
  },
  boxItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    margin: "10px 0px 0px 0px",
  },
  typograhpyCategory: {
    margin: "10px"
  },
}));

export default useStyles;
