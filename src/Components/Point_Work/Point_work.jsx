import React from "react";
import "./Point_work.css";

function Point_work() {
  return (
    <div>
      <div className=" pointWorkMain">
        <div className="">
          <div className="row">
            <div className="col-lg-6">
              <div className="detailMain">
                <h3 className="howPWrkTitle">How points work:</h3>
                <p className="howPWorksub">
                  Earning points is simple - just use Twitter! <br /> <br />
                  Reply or tweet out mentioning{" "}
                  <span className="middspn">@tipcoineth</span> and <br />{" "}
                  <span className="middspn">$tip</span> and you will
                  automatically be awarded points! <br /> <br /> Depending on
                  the type of tip, your multiplier will change as follows:{" "}
                </p>
                <div>
                  <ul className="ListUppErHW">
                    <li className="LiUpperHpoinTW">
                      <>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="MessageIcon"
                        >
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                        </svg>
                      </>
                      <div className="text-start">
                        <p className="HPWlist mb-0">Original Tweet</p>
                        <p className="HPWlist2 mb-0">25x point multiplier</p>
                      </div>
                    </li>

                    <li className="LiUpperHpoinTW">
                      <>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ReplyIcon"
                        >
                          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path>
                        </svg>
                      </>
                      <div className="text-start">
                        <p className="HPWlist mb-0">Tipped Reply</p>
                        <p className="HPWlist2 mb-0">1x point multiplier</p>
                      </div>
                    </li>

                    <li className="LiUpperHpoinTW">
                      <>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="MultipleStopIcon"
                        >
                          <path d="m17 4 4 4-4 4V9h-4V7h4V4zm-7 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM6 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm1 10h4v-2H7v-3l-4 4 4 4v-3zm7 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"></path>
                        </svg>
                      </>
                      <div className="text-start">
                        <p className="HPWlist mb-0">Replied kickbacks</p>
                        <p className="HPWlist2 mb-0">1/10 points per tip</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="endWH">
                  And remember keep an eye out, there might be additional
                  multipliers at claim...
                </p>
              </div>
            </div>

            <div className="col-lg-6 embedUpper">
              <iframe
                className="framPWr"
                src="https://gleam.io/2DOmT/-tip-airdrop-giveaway-"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Point_work;
