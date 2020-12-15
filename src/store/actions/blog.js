import * as actionTypes from './actionTypes';
export const addCategory = (category) => {
  return {
    type: actionTypes.ADD_CATEGORY,
    category,
  };
};
export const setCategories = (categories) => {
  return {
    type: actionTypes.SET_CATEGORIES,
    categories,
  };
};
export const initCategories = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/categories')
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCategories(data.categories));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const modifyCategory = (category) => {
  return {
    type: actionTypes.MODIFY_CATEGORY,
    category,
  };
};
