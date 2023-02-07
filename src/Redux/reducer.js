import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  // DELETE_PRODUCT_SUCCESS,
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

    case ADD_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_PRODUCT_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    case ADD_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: [...state.products, payload],
        isLoading: false,
        isError: false,
      };
    }
    // case DELETE_PRODUCT_SUCCESS:{
    //   return {
    //   ...state,
    //     products: state.products.filter(product => product.id!== payload),
    //   }
    // }
  }
  return state;
};
