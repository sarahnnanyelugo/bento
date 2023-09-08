import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Play from "../../assets/images/playstore.svg";
import Google from "../../assets/images/google.svg";
import "./footer.scss";
import ContactModal from "../ContactModal/ContactModal";

export const Footer = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-70px", position: "relative", zIndex: 4 }}
      >
        <path
          fill="#1D1D1D"
          fill-opacity="1"
          d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <footer className="footer-container">
        <div className="offset-md-1 logo-div col-md-2">
          <img src={Logo} width="100%" />
        </div>
        <div className="col-md-8 offset-md-2 flexy ">
          <div className="col-md-6 flexy flexyM">
            <ul className="col-md-6 list-unstyled col-6">
              <h4>Let’s do it together</h4>
              <li>
                <a className="footer-links">Careers</a>
              </li>
              <li>
                <a className="footer-links">Glovo for partners</a>
              </li>
              <li>
                <a className="footer-links">Couriers</a>
              </li>
              <li>Contact us</li>

              {/* <ContactModal /> */}

              <li>
                <a className="footer-links">Glovo Business</a>
              </li>
            </ul>    <ul className="col-md-6 list-unstyled col-6">
              <h4>Let’s do it together</h4>
              <li>
                <a className="footer-links">Careers</a>
              </li>
              <li>
                <a className="footer-links">Glovo for partners</a>
              </li>
              <li>
                <a className="footer-links">Couriers</a>
              </li>
              <li>
                <a className="footer-links">Glovo Business</a>
              </li>
            </ul>
            {/* <ul className="col-md-6 list-unstyled col-6">
              <h4>Links of interest</h4>
              <li>
                <a className="footer-links">About us</a>
              </li>
              <li>
                <a className="footer-links">FAQ</a>
              </li>
              <li>
                <Link className="footer-links">Bento Prime</Link>
              </li>
              <li>
                <a className="footer-links">Blog</a>
              </li>
              <ContactModal />
              <li>
                <a className="footer-links">Security</a>
              </li>
            </ul> */}
          </div>
          <div className="col-md-6 flexy flexyM">
            <ul className="col-md-6 list-unstyled col-6">
              <h4>Follow us </h4>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
            <ul className="col-md-6 list-unstyled col-6">
              <li>
                <a>
                  {" "}
                  <img src={Play} />
                </a>
              </li>
              <li className="mt1">
                <a>
                  <img src={Google} />
                </a>
              </li>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  TERMS & CONDITIONS
                </a>
              </li>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  COOKIES POLICY
                </a>
              </li>
              <li>
                <a className="footer-links" href="#" target="_blank">
                  COMPLIANCE
                </a>
              </li>
            </ul>

          </div>
        </div>
      </footer>
    </>
  );
};
