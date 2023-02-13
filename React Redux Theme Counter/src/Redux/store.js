import { combineReducers, legacy_createStore } from "redux";
import {counterReducer} from '../Redux/counterReducer'
import {themeReducer} from '../Redux/themeReducer'
const store = legacy_createStore(
  combineReducers({
    counterReducer,themeReducer
  })
);

export default store;
