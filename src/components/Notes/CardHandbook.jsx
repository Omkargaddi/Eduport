import React from "react";

const CardHandbook = ({ handbook }) => {
  return (
    <>
      <div className="card" style={{ width: "14rem", border: " none" }}>
        <div className="card-body">
          <div className="card-img">
            <img src={handbook.image} alt="..." />
          </div>
          <div className="card-text">
            <h5 className="card-title">{handbook.name}</h5>
            <h6 className="card-subtitle mb-2 ">Download Handbooks Here</h6>
            <button type="button" className="btn btn-primary">
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardHandbook;
