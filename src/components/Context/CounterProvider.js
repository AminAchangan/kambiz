import React, { useReducer } from "react";
import { useState, useContext } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const initialstate = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialstate;
    default:
      return state;
  }
};
const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  return useContext(CounterContextDispatcher);
  //   const addOne = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };
  //   const addFive = () => {
  //     setCount((prevCount) => prevCount + 5);
  //   };
  //   const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };
  //   return { addFive, addOne, decrement };
};
