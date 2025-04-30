import React from "react";
import "./Course.css";
import { NavLink } from "react-router-dom";

const Cardp = ({ val }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", border: " none" }}>
        <img src={val.image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text">{val.des}</p>
         <p className="card-price"><b>Price: ₹988</b></p>
          <NavLink className="btn btn-primary" to={"/" + val.link}>
            View Course
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Cardp;
