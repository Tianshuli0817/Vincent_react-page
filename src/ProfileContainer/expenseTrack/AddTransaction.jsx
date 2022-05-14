import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState(" ");
  const { addTransaction } = useContext(GlobalContext);
  const [amount, setAmount] = useState(" ");
  const onsubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(" ");
  };
  return (
    <div className="addTrans">
      <h3 className="expenseText">Add new transaction</h3>
      <form id="form" onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Items</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
