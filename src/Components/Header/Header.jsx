import React from "react";
import "./Header.css";
import "../Login_Modal/Login_modal";
import Login_modal from "../Login_Modal/Login_modal";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div className="container-fluid headr">
        <div className="row">
          <div className="col-lg-12 headerInner">
            <div className="sitle_title_Upper">
              <h1 className="site_title m-0"><a className="text-decoration-none text-white" href="#FirstStepp">Tip Coin</a></h1>
              <div className="">
                <button className="stats_buttn btn m-0">STATS</button>
              </div>
            </div>
            <div className="login">
              <button className="login_button btn" variant="primary" onClick={() => setModalShow(true)}>LOGIN TO CLAIM</button>
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

export default Header;
