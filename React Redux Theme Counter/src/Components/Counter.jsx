import React from "react";

const Counter = () => {
  return (
    // the following div classname should be chnaged accrding to the theme
    <div data-testid="counter">
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
