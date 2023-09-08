import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import "./get-started-modal.scss";
import Location from "../../../assets/images/location.png";
import Drop from "../../../assets/images/dropdown.png";

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
        <input placeholder="choose your location" />
      </Modal.Body>
    </Modal>
  );
}

function LocationModal({ cls, ...props }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { text, bg, bgbtn, backdropbg } = props;
  return (
    <>
      <smal
        onClick={() => setModalShow(true)}
        className={`gs-btn location-trigger ${cls}`}
      >
        <img src={Location} className="icon1" />
        {text}
        <img src={Drop} className="icon2" />
      </smal>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bgbtn={bgbtn}
        backdropbg={backdropbg}
      />
    </>
  );
}

export default LocationModal;
