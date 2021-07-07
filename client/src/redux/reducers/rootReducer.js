import { combineReducers } from "redux";
import allCategoryReducer from "./allCategoryReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
  allCategory: allCategoryReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer
