import * as actionTypes from '../actions/actionTypes';
const initialState = {
  categories: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    default:
      return state;
  }
};
export default reducer;
