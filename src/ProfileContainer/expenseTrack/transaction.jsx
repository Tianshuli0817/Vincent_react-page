import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.transaction.amount < 0 ? "" : "+";
  return (
    <div>
      <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
        {props.transaction.text}{" "}
        <span>
          {sign}
          {props.transaction.amount}$
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(props.transaction.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Transaction;
