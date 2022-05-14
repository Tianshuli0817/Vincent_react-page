import Header from "./header";
import Balance from "./balance";
import IncomeExp from "./income-Exp";
import "./Track.css";
import TransactionList from "./transactionList";
import AddTransaction from "./AddTransaction";
import GlobalProvider from "./context/GlobalState";

function Tracker() {
  return (
    <div className="tracking">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExp />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default Tracker;
