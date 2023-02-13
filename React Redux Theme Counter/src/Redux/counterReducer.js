//Complete the reducer function logic inside the curly braces {}

import { ADD, REDUCE } from "./actionTypes";

// the counter initstate shouldbe 10
const initstate = {
  count: 0
};
const counterReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case REDUCE: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    default: {
      return    state
    }
  }
};

export { counterReducer };
