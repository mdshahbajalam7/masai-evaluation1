//Write the API calling functions here;
import axios from "axios";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
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

export const postProducts = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: ADD_PRODUCT_REQUEST });
  axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,
      payload
    )
    .then(({ data }) => {
      console.log("data", data);
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAILURE });
      console.log(err.massege);
    });
};

export const deleteProducts = (id) => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  axios
    .delete(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(getProducts());
    })
    .catch((err) => {
      dispatch({ type: DELETE_PRODUCT_FAILURE });
      throw err.massege;
    });
};

export const incrementProduct = (itemId, payload) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });
  axios
    .patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${itemId}`,
      payload
    )
    .then(({ data }) => {
      console.log("data", data);
      dispatch(getProducts());
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAILURE });
      console.log(err.massege);
    });
};
export const decerimentProduct = (itemId, payload) => (dispatch) => {
  console.log("itemId", itemId, "payload", payload);
  dispatch({ type: ADD_PRODUCT_REQUEST });
  axios
    .patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${itemId}`,
      payload
    )
    .then(({ data }) => {
      console.log("data", data);
      dispatch(getProducts());
    })
    .catch((err) => {
      dispatch({ type: ADD_PRODUCT_FAILURE });
      console.log(err.massege);
    });
};
