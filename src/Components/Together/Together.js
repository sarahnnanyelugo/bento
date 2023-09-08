import React from "react";
import Hand from "../../assets/images/together.svg";
import Chef from "../../assets/images/chef.png";
import Rider from "../../assets/images/rider-image.png";
import Careers from "../../assets/images/careers.png";
import "./together.scss";
export const Together = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E9F8F4"
          fill-opacity="1"
          d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,202.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="col-md-12 together-div">
        <div>
          {" "}
          <center>
            {" "}
            <img src={Hand} className="hand-div" />
            <h2>Let’s do it together</h2>
          </center>
        </div>
        <div className="col-md-8 offset-md-2 flexy">
          <div className="col-md-4 mt5 together-inner">
            <img src={Rider} />
            <h3>Become a rider</h3>
            <p>
              Enjoy flexibility, freedom and competitive earnings by delivering
              through Bento Delivaz
            </p>
            <button>Register here</button>
          </div>
          <div className="col-md-4 mt5 together-inner">
            <img src={Chef} />
            <h3>Become a partner</h3>
            <p>
              Grow with Bento Delivaz! Our technology and user base can help you
              boost sales and unlock new opportunities!
            </p>
            <button>Register here</button>
          </div>
          <div className="col-md-4 mt5 together-inner">
            <img src={Careers} />
            <h3>Careers</h3>
            <p>
              Ready for an exciting new challenge? If you’re ambitious, humble,
              and love working with others, then we want to hear from you!
            </p>
            <button>Register here</button>
          </div>
        </div>
      </div>
    </>
  );
};
