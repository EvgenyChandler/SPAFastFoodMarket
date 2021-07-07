import Item from "./Item/Item"
import { Box, Typography, Grid } from "@material-ui/core";
import useStyles from "./catalog.style";
import { useAppContext } from "../../context/appContext";

export default function Catalog({ name, products }) {

  const classes = useStyles()

  const { deliveryFlag } = useAppContext()

  const itemsDelivery = products.filter(item => item.delivery)

  return (
    <Grid item xs={12}>
      <Box className={classes.root}>
        <Typography className={classes.typograhpyCategory} variant="h5">
          {name}
        </Typography>
        <Box className={classes.boxItems}>
          {products?.length ?
            deliveryFlag ?
              itemsDelivery.map((item) => <Item key={item._id} item={item} />)
              :
              products.map((item) => <Item key={item._id} item={item} />)
            : "Нет позиций товара"}
        </Box>
      </Box>
    </Grid>
  )
}
