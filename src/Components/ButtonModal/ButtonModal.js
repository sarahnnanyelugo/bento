import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import "./get-started-modal.scss";
// import Form from "../Form/Form";
function MyVerticallyCenteredModal(props) {
  const { bgbtn, backdropbg } = props;
  useEffect(() => {
    const element = document.querySelector(".modal-backdrop");
    if (element) {
      setTimeout(() => {
        element.classList.add(backdropbg);
      }, 5);
      console.log(element);
    }
  });
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {/* <Form
          bg={bgbtn}
          text="Continue"
          body="#fff"
          formHeading="Sign up and onboard your school in seconds"
        /> */}
      </Modal.Body>
    </Modal>
  );
}

function ButtonModal({ cls, ...props }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { text, bg, bgbtn, backdropbg } = props;
  return (
    <>
      <button
        onClick={() => setModalShow(true)}
        style={{ background: bg }}
        className={`gs-btn btn-trigger ${cls}`}
      >
        {text}
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bgbtn={bgbtn}
        backdropbg={backdropbg}
      />
    </>
  );
}

export default ButtonModal;
