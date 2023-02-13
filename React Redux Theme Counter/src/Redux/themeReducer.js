//Complete the reducer function logic inside the curly braces {}
// the theme initstate shouldbe light

import { CHANGE_THEME } from "./actionTypes";

const initstate = {
  theme: "light",
};
const themeReducer = (state = initstate, { type, payload }) => {
  if (type == CHANGE_THEME) {
    return {
      ...state,
      theme: payload,
    };
  } else {
    return state;
  }
};

export { themeReducer };
