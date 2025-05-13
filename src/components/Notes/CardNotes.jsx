import React from "react";
import "./Notes.css";
import { NavLink } from "react-router-dom";

const CardNotes = ({ note,ok }) => {
  return (
    <>
      <div className="card" style={{ width: "14rem", border: " none" }}>
        <div className="card-body">
          <div className="card-img">
            <img src={note.image} alt="..." />
          </div>
          <div className="card-text">
            <h5 className="card-title">{note.name}</h5>
            <h6 className="card-subtitle mb-2 ">Download Notes Here</h6>
          </div>
          <div className="card-btn">
            <NavLink
              className="btn btn-primary"
              to={ok ? "/course2" : "/login"}
              role="button"
            >
               PDF Notes
            </NavLink>
            <NavLink
              className="btn btn-primary"
              to={ok ? "/course2" : "/login"}
              role="button"
            >
              Chapterwise Notes
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNotes;
