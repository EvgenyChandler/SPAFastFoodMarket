import { Typography, Box } from "@material-ui/core";
import useStyles from "./selfDelivery.style";


export default function SelfDelivery() {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant="h4">
        Адрес самовывоза
      </Typography>
      <Box className={classes.boxForm}>
        <Typography
          className={classes.typographyForm}>
          улица Ленина, д. 45
        </Typography>
      </Box>
    </Box>
  )
}
