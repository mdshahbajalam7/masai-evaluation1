//DO NOT change the function names

import { ADD, REDUCE, CHANGE_THEME } from "./actionTypes";

const handleAdd = (dispatch,payload) => {
    console.log(payload);
  dispatch({ type: ADD ,payload});
};

const handleReduce = (dispatch,payload) => {
  dispatch({ type: REDUCE ,payload});
};
const handleTheme = (dispatch,theme) => {
  dispatch({ type: CHANGE_THEME, payload:theme });
};

export { handleAdd, handleReduce, handleTheme };
