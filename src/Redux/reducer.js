import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log("payload", payload);
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    }
  }
  return state;
};
