import { AppBar, Container, Toolbar, IconButton, Box, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useDispatch, useSelector } from 'react-redux';
import setOrder from '../../hooks/setOrder';
import { resetShoppingCard } from '../../redux/actionCreators/shoppingCartAC';
import useStyles from './navbar.style';

export default function Navbar() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const shoppingCard = useSelector((state) => state.shoppingCart)

  const sumCard = shoppingCard.reduce((total, el) => { return total + el.price }, 0)

  return (
    <AppBar className={classes.navbar}>
      <Container className={classes.root}>
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Box className={classes.boxLogo}>

          <Box className={classes.navbarBox} />
          <Box className={classes.navbarBox} />
          <Box className={classes.navbarBox} />
        </Box>

        <Button
          onClick={() => {
            setOrder(shoppingCard)
            dispatch(resetShoppingCard())
          }}
          className={classes.shoppingButton}
          variant="contained"
          endIcon={<ShoppingBasketIcon />}
        >
          {sumCard} ₽
        </Button>
      </Container>
     </AppBar>
  )
}
