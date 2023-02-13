import React from "react";
import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import "./counter.css"
import Theme from "./Theme";

const Counter = () => {
  const { count } = useSelector((state) => state.counterReducer);
  const {theme} = useSelector((state)=>state.themeReducer)
  return (

    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter" className={theme}>
      <h1>Counter</h1>
      <CounterValue count={count} />
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons />
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
