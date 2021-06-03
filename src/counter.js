import React, { useCallback, useReducer } from "react";

import "./counter.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "userInput":
      return {
        count: Number(!isNaN(action.count) && action.count),
      };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const decrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);
  const increment = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);
  const onChange = useCallback(({ target: { value } }) => {
    dispatch({ type: "userInput", count: value });
  }, []);
  return (
    <div
      className="container"
    >
      <div className="decrementDiv">
        <button
          className ="decrementBtton"
          onClick={decrement}
        >
          -
        </button>
      </div>
      <div
        className ="txtDiv"
      >
        <input
          type="text"
          value={state.count}
          onChange={onChange}
          className="input"
        />
        
      </div>
      <div className ="incrementDiv">
        <button
          className="incrementButton"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
