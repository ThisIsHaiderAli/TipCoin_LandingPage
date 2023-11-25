import React from "react";
import "./Process.css";

function Process() {
  return (
    <div>
      <div className="container-fluid processMain">
        <h1 className="processTitle">THE PROCESS</h1>
        <p className="processDetails">
          Tip coin works off of{" "}
          <span style={{ fontWeight: "600" }}>1 week</span> epochs that started
          on September 1st, 2023 at 8:00AM EST (our birthday!). Points earned
          during an epoch can be claimed for{" "}
        </p>
        <div className="row justify-content-center mt-5 bxUpper">
          <div className="col-lg-2 p-0">
            <div className="ErnpointUpper">
              <div className="SCLicon">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SendIcon"
                >
                  <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
              </div>
              <h6 className="ernTitLe mt-2">Earn points</h6>
              <p className="ernPer mb-0">
                Send tweets mentioning us (see above) during the epoch to earn
                points and compete with friends
              </p>
            </div>
          </div>

          <div className="col-lg-1 arrowupper">
            <div>
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-vsjv72" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardDoubleArrowRightIcon"><path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
            </div>
          </div>

          <div className="col-lg-2 p-0">
            <div className="ErnpointUpper">
              <div className="SCLicon">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CalculateIcon"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z"></path>
                </svg>
              </div>
              <h6 className="ernTitLe mt-2">Point Calculations</h6>
              <p className="ernPer mb-0">
                We add up all of your mentions and continuously recalculate
                engagement to update your points
              </p>
            </div>
          </div>

          <div className="col-lg-1 arrowupper">
          <div>
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-vsjv72" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardDoubleArrowRightIcon"><path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
            </div>
          </div>

          <div className="col-lg-2 p-0">
            <div className="ErnpointUpper">
              <div className="SCLicon">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PercentIcon"
                >
                  <path d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                </svg>
              </div>
              <h6 className="ernTitLe mt-2">Token Calculations</h6>
              <p className="ernPer mb-0">
                We determine your percentage of the epoch's token allotment
                using points and account status
              </p>
            </div>
          </div>

          <div className="col-lg-1 arrowupper">
          <div>
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-vsjv72" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardDoubleArrowRightIcon"><path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
            </div>
          </div>

          <div className="col-lg-2 p-0">
            <div className="ErnpointUpper">
              <div className="SCLicon">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="SavingsIcon"
                >
                  <path d="m19.83 7.5-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5h-2.17zM13 9H8V7h5v2zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                </svg>
              </div>
              <h6 className="ernTitLe mt-2">Earn Tokens</h6>
              <p className="ernPer mb-0">
                Claim your percentage of the previous epoch tokens from the
                dashboard in the next epoch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
