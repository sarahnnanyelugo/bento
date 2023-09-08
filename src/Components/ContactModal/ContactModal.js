import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect } from "react";
import "./contact-modal.scss";
import Order from "../../assets/images/order.png";

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
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="contact-div">
          <center>
            <h6>How can we help you?</h6>
          </center>
          <div className="">
            <div class="dropdown order-div col-md-12" tabindex="1">
              <i class="db2" tabindex="1"></i>
              <a class="dropbtn">
                {" "}
                <center>
                  {" "}
                  <img src={Order} width="20%" alt="phone icon" />
                  <h6>Not related to an order?</h6>
                </center>
              </a>
              <div class="dropdown-content"></div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ContactModal({ cls, ...props }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { text, bg, bgbtn, backdropbg } = props;
  return (
    <>
      <li
        onClick={() => setModalShow(true)}
        style={{ background: bg }}
        className={`contact ${cls}`}
      >
        Contact us
      </li>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        bgbtn={bgbtn}
        backdropbg={backdropbg}
      />
    </>
  );
}

export default ContactModal;
