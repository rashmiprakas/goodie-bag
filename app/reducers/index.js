
const initialState = {
  candies: []
}

export const getAllCandies = (candies) => ({
  type: 'GET_ALL_CANDIES',
  candies
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CANDIES':
      return { ...state, candies: action.candies}
    default:
      return state
  }
}

export default rootReducer
