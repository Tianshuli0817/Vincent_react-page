import React, { useReducer } from "react";
import "./footer.css";
const reduce = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return { count: state.count + 1, clickNum: state.clickNum + 1 };
    case "MINUS":
      return { count: state.count - 1, clickNum: state.clickNum + 1 };
    default:
      return state;
  }
};

const Counting = () => {
  const [state, dispatch] = useReducer(reduce, { count: 0, clickNum: 0 });
  return (
    <div className="count">
      <button
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      >
        increse
      </button>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      >
        Decrease
      </button>

      <span>is clicked on {state.clickNum} times</span>
    </div>
  );
};

export default Counting;
