// NOTE: use this store variable to create a store.
import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

// Note: you can delete the line below, but remember to create a new store variable
export const store = legacy_createStore(
  combineReducers({
    product: reducer,
  }),
  compose(applyMiddleware(thunk))
);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
