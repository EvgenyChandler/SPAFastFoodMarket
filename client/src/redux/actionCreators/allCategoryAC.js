import { LOAD_CATEGORYS } from "../types/type"

const getAllCategory = (allCategory) => {
  return {
    type: LOAD_CATEGORYS,
    payload: allCategory,
  }
}

export const fetchGetAllCategory = () => async (dispatch, getState) => {

  const request = await fetch("http://localhost:4200/api/v1"
    , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
  )
  
  const respond = await request.json()
  
  dispatch(getAllCategory(respond))

}
