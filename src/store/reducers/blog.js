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
    case actionTypes.MODIFY_CATEGORY:
      const updatedCategories = [...state.categories];
      const index = updatedCategories.findIndex(
        (cat) => cat._id === action.category._id
      );
      updatedCategories[index] = action.category;
      return {
        ...state,
        categories: updatedCategories,
      };
    default:
      return state;
  }
};
export default reducer;
