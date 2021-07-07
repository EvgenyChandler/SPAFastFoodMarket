import { ADD_SHOPPING_CARD, DELETE_SHOPPING_CARD } from "../types/type";

export default function shoppingCartReducer(state = [], action) {
  switch (action.type) {
    case ADD_SHOPPING_CARD:
      return [...state, action.payload];

    case DELETE_SHOPPING_CARD:
      const index = state.findIndex(item => item._id === action.payload);
      return state.filter((_, i) => i !== index);

    default:
      return state;
  }
}
