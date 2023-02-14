import axios from "axios";
import { COFFEEDATA, EMPLOYEEDATA, RESTAURANTDATA } from "./actionType";

export const getCoffeedata = () => (dispatch) => {
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
    )
    .then(({ data }) => {
    //   console.log(data);
      dispatch({ type: COFFEEDATA, payload: data });
    })
    .catch((err) => console.log(err));
};

export const getEmployeedata = () => (dispatch) => {
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
    )
    .then(({ data }) => {
    //   console.log(data);
      dispatch({ type: EMPLOYEEDATA, payload: data });
    })
    .catch((err) => console.log(err));
};

export const getRestaurantdata = () => (dispatch) => {
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
    )
    .then(({ data }) => {
    //   console.log(data);
      dispatch({ type: RESTAURANTDATA, payload: data });
    })
    .catch((err) => console.log(err));
};
