import React from "react";
import GetStartedForm from "../../Components/GetStartedForm/GetStartedForm";
import "./home.scss";
import Img1 from "../../assets/images/mac.jpg";
import Img2 from "../../assets/images/kfc.jpeg";
import Img3 from "../../assets/images/buger.jpeg";
import Img4 from "../../assets/images/fruits.jpeg";
import Img5 from "../../assets/images/pizza.jpeg";
import Img6 from "../../assets/images/pizza2.jpg";
import Img7 from "../../assets/images/buga.jpeg";
import Img8 from "../../assets/images/snacks.jpg";
import Restaurant from "../../assets/images/restaurant.svg";
import Delivery from "../../assets/images/delivery.svg";
import Groceries from "../../assets/images/groceries.svg";
import Phone from "../../assets/images/phone.png";
import Playstore from "../../assets/images/playstore.svg";
import Google from "../../assets/images/google.svg";
import Phones from "../../assets/images/phones.png";

import Countries from "../../assets/images/countries.svg";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Top from "./Top/Top";
import Restaurants from "../../Components/Restaurants/Restaurants";
import ButtonModal from "../../Components/ButtonModal/ButtonModal";
import { Together } from "../../Components/Together/Together";
function Home() {
  return (
    <>
      <div className="landing-nav col-md-12">
        {" "}
        {/* <p id="container">
          <a className=""> Our Vision is to Give </a>
          <br />
          <a href="#" id="text" className=" text-hov">
            everyone
          </a>
          <a href="#" id="text2" className=" text-hov">
            easy
          </a>
          <a href="#" id="text3" className=" text-hov">
            access
          </a>
          <a href="#">to</a> <br />
          <a href="#" id="text4" className=" text-hov">
            anything
          </a>
          <a href="#">in their </a>
          <a href="#" id="text5" className=" text-hov">
            city
          </a>
          <div id="background"></div>
        </p>
        <div class="overlay"></div> */}
        <div className=" col-md-8 offset-md-2"> {/* <Top /> */}</div>
        <div className="landing-div flexy ">
          <div className="  offset-md-3 col-md-3">
            {" "}
            <video
              className="viddeo "
              width="100%"
              autoplay="true"
              loop="true"
              muted="true"
              playsinline=""
              src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
            ></video>
          </div>
          <div className="col-md-4">
            <h1>Food delivery and more</h1>
            <p>Groceries, shops, pharmacies, anything!</p>
            <GetStartedForm />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fac143"
          fill-opacity="1"
          d="M0,0L60,10.7C120,21,240,43,360,64C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <center>
        <h1 className="mt">Top restaurants and more in Bento Delivaz</h1>
      </center>
      <div className="col-md-6 offset-md-3 flexy mt5">
        <div className="col-md-3 ">
          <Restaurants
            img={Img1}
            title="MacDonald's"
            backdropbg="modal-backdrop-dark"
          />
        </div>{" "}
        <div className="col-md-3 ">
          <Restaurants
            img={Img2}
            title="KFC"
            backdropbg="modal-backdrop-dark"
          />
        </div>{" "}
        <div className="col-md-3 ">
          <Restaurants
            img={Img3}
            title="BurgerKing"
            backdropbg="modal-backdrop-dark"
          />
        </div>
        <div className="col-md-3 ">
          <Restaurants
            img={Img4}
            title="Carrefour"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>{" "}
      <div className="col-md-6 offset-md-3 flexy mt5 no-m">
        <div className="col-md-3 ">
          <Restaurants
            img={Img5}
            title="PizzaHut"
            backdropbg="modal-backdrop-dark"
          />
        </div>{" "}
        <div className="col-md-3 ">
          <Restaurants
            img={Img6}
            title="Papa John's"
            backdropbg="modal-backdrop-dark"
          />
        </div>{" "}
        <div className="col-md-3 ">
          <Restaurants
            img={Img7}
            title="Subway"
            backdropbg="modal-backdrop-dark"
          />
        </div>
        <div className="col-md-3 ">
          <Restaurants
            img={Img8}
            title="TacoBell"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>
      <center>
        <h1 className="mt">Anything delivered</h1>
      </center>
      <div className="col-md-8 offset-md-2 flexy processes-div">
        <div className="col-md-4">
          <img src={Restaurant} />
          <h6>Your city's top restaurants</h6>
          <p>
            With a great variety of restaurants you can order your favourite
            food or <span>explore new restaurants nearby!</span>
          </p>
        </div>{" "}
        <div className="col-md-4">
          <img src={Delivery} />
          <h6>Your city's top restaurants</h6>
          <p>
            Like a flash! Order or send anything in your city and{" "}
            <span>receive it in minutes</span>
          </p>
        </div>{" "}
        <div className="col-md-4">
          <img src={Groceries} />
          <h6>Your city's top restaurants</h6>
          <p>
            Find anything you need! From{" "}
            <span>supermarkets to shops, pharmacies to florists</span> — if it's
            in your city order it and receive it.
          </p>
        </div>
      </div>
      <center>
        <ButtonModal
          text=" Explore stores around you"
          bg="#3C856C"
          bgbtn="#0098DA"
          backdropbg="modal-backdrop-dark"
        />
      </center>
      <div className="countries-div">
        <center>
          <h1>Countries where we deliver</h1>
        </center>
        <center>
          <div className="col-md-8  row row-cols-3 row-cols-lg-6 g-2 g-lg-4 ">
            <div className="col countries">Spain</div>
            <div className="col countries">Italy</div>
            <div className="col countries">Ukrain</div>
            <div className="col countries">Romania</div>
            <div className="col countries">Georgia</div>
            <div className="col countries">Portugal</div>
            <div className="col countries">Poland</div>
            <div className="col countries">Morocco</div>
            <div className="col countries">Kazakhstan</div>
            <div className="col countries">Croatia</div>
            <div className="col countries">Cote De'Ivoire</div>
            <div className="col countries">Serbia</div>
            <div className="col countries">Moldova</div>
            <div className="col countries">Uganda</div>
            <div className="col countries">Kyrgyzstan</div>
            <div className="col countries">Bulgaria</div>
            <div className="col countries">Ghana</div>
            <div className="col countries">Montenegro</div>
          </div>
        </center>
        <center>
          {" "}
          <div
            className="col-md-7 row row-cols-3 row-cols-lg-5 g-2 g-lg-4 "
            style={{ marginTop: "5px" }}
          >
            {" "}
            <div className="col countries">Slovenia</div>
            <div className="col countries">Nigeria</div>
            <div className="col countries">Armenia</div>
            <div className="col countries">Andorra</div>
            <div className="col countries">Tunisia</div>
          </div>
        </center>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fac143"
          fill-opacity="1"
          d="M0,0L60,10.7C120,21,240,43,360,64C480,85,600,107,720,101.3C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="col-md-8 offset-md-2 flexy action-div">
        <div className="col-md-5 download-div">
          {" "}
          <img src={Phone} />
          <h1>Download the app</h1>
          <p>Order anything and track it in real time with the Glovo app.</p>
          <center>
            <img src={Playstore} style={{ marginRight: "5px" }} />
            <img src={Google} />
          </center>
        </div>
        <div className="col-md-7">
          {" "}
          <img src={Phones} width="100%" />
        </div>
      </div>
      <Together />
    </>
  );
}

export default Home;
