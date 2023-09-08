import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

import "./top.scss";
function Top() {
  return (
    <div className="col-md-12 top-container flexy">
      <div className="logo-div2  col-md-2 ">
        {" "}
        <img src={Logo} width="100%" />
      </div>
      <Link to={"/main"} className="offset-md-8">
        {" "}
        <button>Get started</button>
      </Link>
    </div>
  );
}

export default Top;
