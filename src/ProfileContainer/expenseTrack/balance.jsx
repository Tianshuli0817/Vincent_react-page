import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const sum = transactions
    .reduce((total, transaction) => (total = total + transaction.amount), 0)
    .toFixed(2);
  console.log(sum);
  return (
    <div>
      <h4 className="expenseText">Your Balance</h4>
      <h1 className="balance expenseText">${sum}</h1>
    </div>
  );
};

export default Balance;
