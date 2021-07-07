import { AppBar, Container, Toolbar, IconButton, Box, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useSelector } from 'react-redux';
import useStyles from './navbar.style';

export default function Navbar() {
  const classes = useStyles()

  const shoppingCard = useSelector((state) => state.shoppingCart)

  const sumCard = shoppingCard.reduce((total, el) => { return total + el.price }, 0)

  return (
    <AppBar className={classes.navbar}>
      <Container className={classes.root} color="inherit">
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
