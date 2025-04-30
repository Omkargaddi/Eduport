import React from "react";
import "./Blog.css";

const Card2 = ({ val }) => {
  return (
    <>
      <div className="Blog-card">
        <img src={val.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
          <p className="card-text">{val.des}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Last updated {val.update} mins ago
          </small>
        </div>
      </div>
    </>
  );
};
export default Card2;
