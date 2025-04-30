import React from "react";
import "./Course.css";
import { NavLink } from "react-router-dom";

const Cardf = ({ val }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", border: " none" }}>
        <img src={val.image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text">{val.des}</p>
          <NavLink className="btn btn-primary" to={"/" + val.link}>
            Start Watching
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Cardf;
