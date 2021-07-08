import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  navbar: {
    background: "#FFFFFF",
    width: "100%",
    position: "sticky",
    top: "0",
  },
  root: {
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "nowrap",
    position: "sticky",
    top: "0",
  },
  navbarBox: {
    width: "14px",
    height: "17px",
    background: "#E4002B",
    margin: "0px 7px 0px",
  },
  boxLogo: {
    width: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shoppingButton: {
    height: "36px",
    background: "#E4002B",
    margin: "12px",
    borderRadius: "18px",
  },
}));

export default useStyles
