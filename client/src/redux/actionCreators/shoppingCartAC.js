import {
  ADD_SHOPPING_CARD,
  DELETE_SHOPPING_CARD,
  RESET_SHOPPING_CARD,
} from "../types/type";


export const addShoppingCard = (item) => {
  return {
    type: ADD_SHOPPING_CARD,
    payload: item,
  };
};

export const deleteShoppingCard = (id) => {
  return {
    type: DELETE_SHOPPING_CARD,
    payload: id,
  };
};

export const resetShoppingCard = () => {
  return {
    type: RESET_SHOPPING_CARD,
  };
}
