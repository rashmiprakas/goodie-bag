import Axios from "axios";

const initialState = {
  candies: []
}

export const getAllCandies = (candies) => ({
  type: 'GET_ALL_CANDIES',
  candies
})

export const getCandies = () => {
  return async (dispatch) => {
    const { data } = await Axios.get('/candies')
    dispatch(getAllCandies(data))
  }
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CANDIES':
      return { ...state, candies: action.candies}
    default:
      return state
  }
}


export default rootReducer
