import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import "./get-started-modal.scss";
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
        <h1>This is the form</h1>
      </Modal.Body>
    </Modal>
  );
}

function GetStartedForm({ cls, ...props }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { text, bg, bgbtn, backdropbg } = props;
  return (
    <>
      <input
        onClick={() => setModalShow(true)}
        placeholder="what is your address?"
        className="modal-input"
      />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bgbtn={bgbtn}
        backdropbg={backdropbg}
      />
    </>
  );
}

export default GetStartedForm;
