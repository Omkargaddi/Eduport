import React from "react";
import "./Notes.css";

const CardNotes = ({ note }) => {
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
            <button type="button" className="btn btn-primary">
              PDF Notes
            </button>
            <button type="button" className="btn btn-primary">
              Chapterwise Notes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNotes;
