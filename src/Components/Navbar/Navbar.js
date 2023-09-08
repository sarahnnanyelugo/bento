import React from "react";
import LocationModal from "./LocationModal/LocationModal";
import "./navbar.scss";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar-container  col-md-12">
        <div className="col-md-10 offset-md-1  flexy flexyM">
          <div className="logo-div ">
            {" "}
            <img src={Logo} width="100%" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="offset-md-3 search-input col-md-3"
          />
          <div className="offset-md-2">
            <LocationModal text="Location Address" />
          </div>
          <button>Get started</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
