import React from 'react';
import { Card, Box, Typography, IconButton } from '@material-ui/core/';
import useStyles from './item.style';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { addShoppingCard, deleteShoppingCard } from '../../../redux/actionCreators/shoppingCartAC';
import { useDispatch, useSelector } from 'react-redux';

export default function Item({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch()


  function addShoppingCardHandler() {
    dispatch(addShoppingCard(item))
  }

  function deleteShoppingCardHandler() {
    dispatch(deleteShoppingCard(item._id))
  }

  const shoppingCard = useSelector((state) => state.shoppingCart)


  const count = shoppingCard?.filter(el => el._id === item._id)

  return (
    <Card className={classes.root}>
      <Box align="center">
        <img src={`http://localhost:4200/${item.img}`} alt={item.img} className={classes.boxImg} />
      </Box>
      <Typography component="p"
        align="center">
        {item.name}
      </Typography>
      <Typography component="p"
        align="center"
      >
        {item.price} ₽
      </Typography>
      {count.length ?

        (<Box className={classes.boxButton}>
          <IconButton
            onClick={deleteShoppingCardHandler}
            className={classes.colorBlack}>
            <RemoveCircleIcon />
          </IconButton>
          <Typography
            component="p"
            align="center"
          >
            {count.length}
          </Typography>
          <IconButton
            onClick={addShoppingCardHandler}
            className={classes.colorBlack}>
            <AddCircleIcon />
          </IconButton>
        </Box>)
        :
        (<Box className={classes.boxButton}>
          <IconButton
            onClick={addShoppingCardHandler}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </Box>)
      }
    </Card >
  );
}
