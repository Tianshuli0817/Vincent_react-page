import "./App.css";
import PrintProfile from "./ProfileContainer/Home/Profile";
import Introduction from "./ProfileContainer/aboutMe/Intro";
import Tracker from "./ProfileContainer/expenseTrack/Track";
import Footer from "./ProfileContainer/footer/footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="App">
        <PrintProfile />
        <Introduction />
        <Tracker />
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
