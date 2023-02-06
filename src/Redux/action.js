//Write the API calling functions here;
import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const getProducts = () => async (dispatch) => {
  // console.log(process.env.REACT_APP_JSON_SERVER_PORT);
  dispatch({ type: GET_PRODUCTS_REQUEST });
  //   url =  `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
  await axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
    .then(({ data }) => {
      console.log("data", data);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCTS_FAILURE });
      console.log(err.massege);
    });
};
