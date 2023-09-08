import React from "react";
import "./stores.scss";
const Stores = ({ data }) => {
  return (
    <div className="col-md-3 stores-container">
      {" "}
      <img src={data.img} className="" alt="stors-pics" width="100%" />
      <h6>{data.title}</h6>
      <small>{data.rating}</small>
    </div>
  );
};

export default Stores;
