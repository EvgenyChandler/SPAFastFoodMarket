import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainContent: {
    background: "#FFFFFF",
    margin: "10px",
  },
  boxFormAndButtom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  buttonGroup: {
    position: "sticky",
    top: "65px",
    background: "#FFFFFF",
    padding: "5px",
  },
}));

export default useStyles;
