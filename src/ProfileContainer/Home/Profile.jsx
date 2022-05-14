import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import vid from "./color-play.mp4";

// import pic from "./group.JPG";

function PrintProfile() {
  return (
    <div className="Profile-container">
      <video autoPlay muted loop id="myVideo">
        <source src={vid} type="video/mp4" />
      </video>

      <div className="Profile-parent">
        <div className="Profile-detail">
          <div className="colz">
            <a href="https://www.facebook.com/tianshu.li.180">
              <i className="fa fa-facebook-square" id="icon"></i>
            </a>
            <a href="https://www.instagram.com/vincent.tianshu.li/">
              <i className="fa fa-instagram" id="icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/vincent-li-2b0564197/">
              <i className="fa fa-linkedin" id="icon"></i>
            </a>
          </div>
          <div className="Profile-detail-name">
            <span className="First-text">
              {" "}
              Welcome to <span className="Second-text">Vincent's website</span>
            </span>
          </div>
          <div className="Profile-detail-text">
            <span className="First-text1">
              <p>You will learn about:</p>
              <Typical
                steps={[
                  " My Life😋",
                  2000,
                  " My Career🤩",
                  2000,
                  " My Interests🥳",
                  2000,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </span>
          </div>
          <div className="Profile-detail-buttons">
            <button className="buttons">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrintProfile;
