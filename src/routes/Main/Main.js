import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Google from "../../assets/images/google.svg";
import "./main.scss";
import LocationModal from "../../Components/Navbar/LocationModal/LocationModal";
import Icon from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import Icon4 from "../../assets/images/icon4.png";
import Icon5 from "../../assets/images/icon5.png";
import Icon6 from "../../assets/images/icon6.png";
import Icon7 from "../../assets/images/icon7.png";
import House from "../../assets/images/house.svg";
import FoodModal from "./FoodModal/FoodModal";
import { stores } from "../../data";
import Stores from "../../Components/Stores/Stores";
import { Together } from "../../Components/Together/Together";
import { Link } from "react-router-dom";

function Main() {
  const [state, setState] = useState({
    query: "",
    list: stores,
  });
  return (
    <>
      {/* <Navbar /> */}

      <div className="main-body-container">
        <div className="col-md-6 offset-md-3">
          <center>
            <p>
              Delivering to{" "}
              <LocationModal text="  Oremeji Mokola, Mokola Hill 200285, Ibadan, Oyo, Nigeria" />
            </p>
          </center>
          <div className="row row-cols- row-cols-md-7 g-2 g-lg-3">
            <div className="col">
              <center>
                {" "}
                <div className="icon-div">
                  {/* <Fd /> */}
                  <FoodModal />
                </div>
              </center>
              <center>
                <h5>Food</h5>
              </center>
            </div>
            <div className="col">
              <center>
                <div className="icon-div">
                  <img src={Icon2} className="food-icons" alt="food-icon" />
                </div>
              </center>
              <center>
                <h5>Chicken Republic</h5>
              </center>
            </div>
            <div className="col">
              <center>
                <div className="icon-div">
                  <img src={Icon3} className="food-icons" alt="food-icon" />
                </div>
              </center>
              <center>
                <h5>Package Delivery</h5>
              </center>
            </div>
            <div className="col">
              <center>
                <div className="icon-div">
                  <img src={Icon4} className="food-icons" alt="food-icon" />
                </div>
              </center>
              <center>
                <h5>Shoprite</h5>
              </center>
            </div>
            <div className="col">
              <center>
                <div className="icon-div">
                  <img src={Icon5} className="food-icons" alt="food-icon" />
                </div>
              </center>
              <center>
                <h5>Coca-cola Treats</h5>
              </center>
            </div>
            <div className="col">
              <center>
                {" "}
                <div className="icon-div">
                  <img src={Icon6} className="food-icons" alt="food-icon" />
                </div>
              </center>
              <center>
                <h5>Bentomania</h5>
              </center>
            </div>
            <div className="col">
              <center>
                {" "}
                <div className="icon-div">
                  <img src={Icon7} className="food-icons" alt="food-icon" />
                </div>
              </center>
              <center>
                <h5>Supemarkets</h5>
              </center>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-100px" }}
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="col-md-8 offset-md-2 nearby-stores ">
        <h4>Stores you might like</h4>
        <Link className="row stores-link" to={"/menu"}>
          {state.list.map((data, index) => (
            <Stores data={data} />
          ))}
        </Link>
      </div>

      <center>
        {" "}
        <div className="col-md-7 categories">
          {" "}
          <img src={House} className="" alt="house-icon" />
          <h1>Top Categories in Ibadan</h1>
          <button>Chicken</button>
          <button>Pasta</button>
          <button>Traditional</button>
          <button>Loca food</button>
          <button>Healthy</button>
          <button>Breakfast</button>
          <button>Snacks</button>
          <button>Shawama</button>
          <button>International</button>
          <button>Pizza</button>
        </div>
      </center>
      <Together />
    </>
  );
}

export default Main;
