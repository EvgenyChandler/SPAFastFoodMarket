import { Typography, Box, Button } from "@material-ui/core";
import { useAppContext } from "../../context/appContext"

export default function ButtonDelivery() {

  const { deliveryFlag, setDeliveryFlagHandler } = useAppContext()

  return (
    <Box>
      <Button
        onClick={() => setDeliveryFlagHandler(true)}
        variant="contained"
        color={deliveryFlag ? "secondary" : "default"}
      >
        <Typography variant="h7">
          Доставка
        </Typography>
      </Button>
      <Button
        onClick={() => setDeliveryFlagHandler(false)}
        variant="contained"
        color={deliveryFlag ? "default" : "secondary"}>
        <Typography variant="h7">
          Самовывоз
        </Typography>
      </Button>
    </Box>
  )
}
