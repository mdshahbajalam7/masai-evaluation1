import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();
  const addcount = (payload) => {
    handleAdd(dispatch,payload);
  };
  const reducecount = (payload) => {
    handleReduce(dispatch,payload);
  };
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={() => addcount(1)}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={() => reducecount(1)}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
