import React, { createContext, useReducer } from "react";

import TrackerReducer from "./TrackerReducer";
const initialState = {
  transactions: [
    { id: 1, text: "milk", amount: -135.64 },
    { id: 2, text: "cows", amount: 220 },
    { id: 3, text: "bike", amount: -80 },
    { id: 4, text: "chair", amount: 40 },
  ],
};
export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TrackerReducer, initialState);
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
