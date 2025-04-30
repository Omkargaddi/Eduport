import React from "react";
import "./Tutorial.css";


const CardTut = ({ cardtut }) => {
  return (
    <>
      <div className="card" style={{ width: "14rem", border: " none" }}>
        <div className="card-body">
          <div className="card-img">
            <img src={cardtut.image} alt="..." />
          </div>
          <div className="card-text">
            <h5 className="card-title">{cardtut.name}</h5>
            <button type="button" className="btn btn-primary">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardTut;
