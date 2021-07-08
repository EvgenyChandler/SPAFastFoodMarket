import { Grid, Container, Box, Button } from "@material-ui/core";
import Form from "../Form/Form";
import Catalog from "../Catalog/Catalog";
import ButtonDelivery from "../ButtonDelivery/ButtonDelivery";
import SelfDelivery from "../SelfDelivery/SelfDelivery"
import useStyles from "./main.style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllCategory } from "../../redux/actionCreators/allCategoryAC";
import { useAppContext } from "../../context/appContext";


export default function Main() {

  const classes = useStyles()

  const dispatch = useDispatch()

  const categoryList = useSelector((state) => state.allCategory)

  useEffect(() => {
    dispatch(fetchGetAllCategory())
  }, [])

  const { deliveryFlag } = useAppContext()

  const scroll = (needId) => {
   const current = document.querySelectorAll(`.catalog`)
    current.forEach(el => {
      if (el.id === needId) {
        el.scrollIntoView({ block: "start", behavior: "smooth" })
      }
    })
  }

  return (
    <main className={classes.mainContent}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box className={classes.boxFormAndButtom}>
              {deliveryFlag ? <Form /> : <SelfDelivery/>}
              <ButtonDelivery />
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.buttonGroup}>
            <Box >
              {
                categoryList?.length ?
                  categoryList.map((category) => <Button onClick={() => scroll(category._id)} key={category._id}>{category.name}</Button>
                  )
                  :
                  null
              }
            </Box>
          </Grid>
          {categoryList?.length ?
            categoryList.map((category) => <Catalog key={category._id} id={category._id} name={category.name} products={ category.products }/>
            )
            :
            "Нет товара"}
        </Grid>
      </Container>
    </main>
  )

}
