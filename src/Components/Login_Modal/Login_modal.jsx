import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Login_modal.css";

function Login_modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header > */}
      <Modal.Body className="mdlMain">
        <h4>Login</h4>
        <p className="peraMald1">
          Please connect your twitter to join the airdrop! This is just to
          verify your account, we won't be able to post or make changes.
        </p>
        <div className="d-flex justify-content-center"><button className="conw btn">Connect Twitter</button></div>
        <p className="MDDlPera mb-0 mt-3">By using Tip Coin, you agree to our Terms of Service and our Privacy Policy.</p>
      </Modal.Body>
      {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
}

// function Login_modal() {
//     const [modalShow, setModalShow] = React.useState(false);
//   return (
//     <div>
//       <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <Login_modal
//       show={modalShow}
//       onHide={() => setModalShow(false)}
//       />

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//     </div>
//   )
// }

export default Login_modal;
