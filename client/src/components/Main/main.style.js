import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainContent: {
    background: "#FFFFFF",
    position: "absolute",
    marginTop: "80px",
  },
  boxFormAndButtom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default useStyles;
