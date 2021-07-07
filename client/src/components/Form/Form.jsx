import { Typography, Box, TextField } from "@material-ui/core";
import useStyles from "./form.style";


export default function Form() {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant="h4">
        Доставка г. Москва
      </Typography>
      <Box className={classes.boxForm}>
        <Typography
          className={classes.typographyForm}>
          Улица
        </Typography>
        <TextField color="secondary" />
        <Typography
          className={classes.typographyForm}>
          Дом
        </Typography>
        <TextField color="secondary" />
      </Box>
    </Box>
  )
}
