import React from "react";
import "./Tutorial.css";
import "./CardTut";
import { tutorialData } from "../../utils/data";
import CardTut from "./CardTut";

const Tutorial = ({ok}) => {
  return (
    <>
      <div className="head">
        <h3>Tutorials</h3>
      </div>

      <div className="tutorial">
        {tutorialData.map((cardtut) => {
          return <CardTut key={cardtut.id} cardtut={cardtut} ok={ok} />;
        })}
      </div>
    </>
  );
};
export default Tutorial;
