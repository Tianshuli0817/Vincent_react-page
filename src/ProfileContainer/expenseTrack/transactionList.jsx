import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Transaction from "./transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  // const transactions = [
  //   { id: 1, text: "milk", amount: -20 },
  //   { id: 2, text: "cows", amount: +220 },
  //   { id: 3, text: "bike", amount: -80 },
  //   { id: 4, text: "chair", amount: +40 },
  // ];
  return (
    <div className="transactionLi">
      <h3 className="expenseText">History</h3>
      <ul className="list expenseText">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
