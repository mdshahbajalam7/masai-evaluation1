import * as types from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  coffeeData: [],
  restaurantData: [],
  employeeData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ISLOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ISERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.COFFEEDATA: {
      return {
        ...state,
        coffeeData: payload.data,
        isLoading: false,
        isError: false,
      };
    }
    case types.EMPLOYEEDATA: {
      return {
        ...state,
        employeeData: payload.data,
        isLoading: false,
        isError: false,
      };
    }
    case types.RESTAURANTDATA: {
      return {
        ...state,
        restaurantData: payload.data,
        isLoading: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
