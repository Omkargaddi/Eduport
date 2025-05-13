import React from "react";
import "./Tutorial.css";
import { NavLink } from "react-router-dom";

const CardTut = ({ cardtut,ok }) => {
  return (
    <>
      <div className="card" style={{ width: "14rem", border: " none" }}>
        <div className="card-body">
          <div className="card-img">
            <img src={cardtut.image} alt="..." />
          </div>
          <div className="card-text">
            <h5 className="card-title">{cardtut.name}</h5>
            
            <NavLink className="btn btn-primary" to={ok ? "/course2" : "/login"} role="button">
            Start Learning
                      </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardTut;
