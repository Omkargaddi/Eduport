import React from "react";
import "../Course/Course.css";
import { premiumCourseData, freeCourseData } from "../../utils/data";
import Cardp from "../Course/Cardp";
import Cardf from "../Course/Cardf";

const Course = () => {
  return (
    <>
      <section className="main-container">
        <h3>Premium Courses</h3>
        <div className="submain-container">
          {premiumCourseData.map((val) => {
            return <Cardp val={val} key={val.id} />;
          })}
        </div>
        <h3>Free Courses</h3>
        <div className="submain-container">
          {freeCourseData.map((val) => {
            return <Cardf val={val} key={val.id} />;
          })}
        </div>
      </section>

      <a href="#" className="to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};
export default Course;
