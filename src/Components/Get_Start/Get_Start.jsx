import React from "react";
import "./Get_Start.css";
import "../Login_Modal/Login_modal";
import Login_modal from "../Login_Modal/Login_modal";

function Get_Start() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div id="GetStart">
      <div className="container-fluid getSrt" >
        <div className="row">
          <div className="col-lg-12">
            <h1 className="getTitle">Get Started</h1>
            <div className="listMain">
              <ul className="mt-5 startLiUpper">
                <li className="startDetail">
                  <>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="Filter1Icon"
                    >
                      <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path>
                    </svg>
                  </>
                  <div className="text-start">
                    <p className="m-0 getP1">Connect Twitter</p>
                    <p className="m-0 getP2">
                      Link your twitter to create your $tip account
                    </p>
                  </div>
                </li>
                <li className="startDetail">
                  <>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="Filter2Icon"
                    >
                      <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"></path>
                    </svg>
                  </>
                  <div className="text-start">
                    <p className="m-0 getP1">Send join message</p>
                    <p className="m-0 getP2">
                      Send out your join message to activate
                    </p>
                  </div>
                </li>
                <li className="startDetail">
                  <>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="Filter3Icon"
                    >
                      <path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"></path>
                    </svg>
                  </>
                  <div className="text-start">
                    <p className="m-0 getP1">Start earning points</p>
                    <p className="m-0 getP2">
                      Keep tweeting every epoch to generate points
                    </p>
                  </div>
                </li>
                <li className="startDetail">
                  <>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="Filter4Icon"
                    >
                      <path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"></path>
                    </svg>
                  </>
                  <div className="text-start">
                    <p className="m-0 getP1">Claim</p>
                    <p className="m-0 getP2">
                      Claim your points for $tip tokens after each epocht
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="startButnUpper">
              <button
                className="startButn btn"
                onClick={() => setModalShow(true)}
              >
                START NOW
              </button>
              <Login_modal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get_Start;
