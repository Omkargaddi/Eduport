import React from "react";
import "./Notes.css";
import CardNotes from "./CardNotes";
import CardCheet from "./CardCheet";
import CardHandbook from "./CardHandbook";
import {
  downloadNotesData,
  downloadCheatSheetData,
  downloadHandbookData,
} from "../../utils/data";

const Notes = ({ok}) => {
  return (
    <>
      <div className="main-container">
        <div className="head">
          {" "}
          <h3>Download Notes</h3>
        </div>
        <div className="notes">
          {downloadNotesData.map((note) => {
            return <CardNotes note={note} key={note.id} ok={ok}/>;
          })}
        </div>

        <div className="head">
          <h3>Download Cheatsheets</h3>
        </div>
        <div className="notes">
          {downloadCheatSheetData.map((cheet) => {
            return <CardCheet cheet={cheet} key={cheet.id} ok={ok} />;
          })}
        </div>

        <div className="head">
          <h3>Download Handbook</h3>
        </div>
        <div className="notes">
          {downloadHandbookData.map((handbook) => {
            return <CardHandbook handbook={handbook} key={handbook.id} ok={ok} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Notes;
