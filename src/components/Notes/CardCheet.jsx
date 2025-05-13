import React from "react";
import { NavLink } from "react-router-dom";
const cardCheet = ({ cheet,ok }) => {
  return (
    <>
      <div className="card" style={{ width: "14rem", border: " none" }}>
        <div className="card-body">
          <div className="card-img">
            <img src={cheet.image} alt="..." />
          </div>
          <div className="card-text">
            <h5 className="card-title">{cheet.name}</h5>
            <h6 className="card-subtitle mb-2 ">Download Cheatsheets Here</h6>
            <NavLink className="btn btn-primary" to={ok ? "/course2" : "/login"} role="button">
            Download
                      </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default cardCheet;
