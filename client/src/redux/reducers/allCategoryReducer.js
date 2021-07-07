import { LOAD_CATEGORYS } from "../types/type"

export default function allCategoryReducer(state = [], action) {
  switch (action.type) {
    case LOAD_CATEGORYS:
      return action.payload
  
    default:
      return state;
  }
}
