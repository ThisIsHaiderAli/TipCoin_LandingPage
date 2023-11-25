import React from "react";
import "./First_sec.css";

function First_sec() {
  return (
    <div id="FirstStepp">
      <div className="container-fluid firstSec_main">
        <div className="row">
          <div className="firstSec_upper">
            <h2 className="m-0 first_secTitle">
              {" "}
              The{" "}
              <i>
                <span style={{ fontWeight: "600" }}>future</span>
              </i>{" "}
              of social interaction
            </h2>
            <div className="d-flex justify-content-center">
            <p className="firstSec_P">
              Refer your friend and your favorite co creators to join tip coin
              compelition and get reward in tip coin.
            </p></div>
            <div className="firstSecbut_Upper">
              <button className="firstSec_Butn1 btn"><a className="text-decoration-none text-black" href="#GetStart">Buy Now</a></button>
              <button className="firstSec_Butn2 btn">Uniswap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First_sec;
