import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const IncomeExp = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const incomes = amounts
    .filter((item) => item > 0)
    .reduce((total, item) => (total += item), 0)
    .toFixed(2);
  console.log(incomes);
  const expenses =
    amounts
      .filter((item) => item < 0)
      .reduce((total, item) => (total += item), 0)
      .toFixed(2) * -1;

  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4 className="expenseText1">Income</h4>
        <p className="money plus expenseText1">+${incomes}</p>
      </div>
      <div className="expense">
        <h4 className="expenseText1">Expense</h4>
        <p className="money minus expenseText1">-${expenses}</p>
      </div>
    </div>
  );
};

export default IncomeExp;
