import React, { useEffect, useState } from "react";
import {
  randomizeAttendance,
  renderCalendar,
  renderGradeChart,
} from "./Dashboard.js";
import "./Dashboard.css";

const Dashboard = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const MIN_MONTH = 0;
  const MAX_MONTH = 2;

  const handlePrev = () => {
    setCurrentMonth((prev) => Math.max(prev - 1, MIN_MONTH));
  };

  const handleNext = () => {
    setCurrentMonth((prev) => Math.min(prev + 1, MAX_MONTH));
  };

  useEffect(() => {
    randomizeAttendance();
    renderCalendar(currentMonth);
    renderGradeChart();
  }, []);

  useEffect(() => {
    renderCalendar(currentMonth);
  }, [currentMonth]);

  return (
    <>
      <div className="head">
        <h3 id="header">Student Dashboard</h3>
      </div>
      <div className="main">
        <div className="section">
          <h2>
            <i className="fas fa-user"></i> User Profile
          </h2>
          <div className="profile-header">
            <div className="user-icon">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="username">brood_bees_90</div>
          </div>
          <div className="profile-details">
            <div className="profile-item">
              <span className="label">Country:</span>
              <span className="value">IN - India</span>
            </div>
            <div className="profile-item">
              <span className="label">Student/Professional:</span>
              <span className="value">Student</span>
            </div>
            <div className="profile-item">
              <span className="label">EduPort Pro Plan:</span>
              <span className="value">Active</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>
            <i className="fas fa-chart-line"></i> Activity Chart
          </h2>
          <div className="navigation">
            <button id="prevMonth" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <span id="currentMonth">{`Month ${currentMonth + 1}`}</span>
            <button id="nextMonth" onClick={handleNext}>
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div id="calendarContainer"></div>
          <canvas id="attendancechart"></canvas>
        </div>

        <div className="section">
          <h2>
            <i className="fas fa-tasks"></i> Course Completion
          </h2>
          <ul className="Grades">
            <li>
              <i className="fas fa-check-circle"></i> Python:{" "}
              <span className="progress">94%</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Next-Js:{" "}
              <span className="progress">85%</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Java:{" "}
              <span className="progress">96%</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> OOPS:{" "}
              <span className="progress">75%</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Django:{" "}
              <span className="progress">86%</span>
            </li>
          </ul>
          <canvas id="gradechart"></canvas>
        </div>

        <div className="section">
          <h2>
            <i className="fas fa-calendar-alt"></i> Practice Due
          </h2>
          <ul className="assignments">
            <li>
              <i className="fas fa-exclamation-circle"></i> Python Practice -
              Due: 10/11
            </li>
            <li>
              <i className="fas fa-exclamation-circle"></i> Next-Js Practice -
              Due: 23/12
            </li>
            <li>
              <i className="fas fa-exclamation-circle"></i> C++ Practice - Due:
              8/10
            </li>
            <li>
              <i className="fas fa-exclamation-circle"></i> Java Practice - Due:
              9/12
            </li>
            <li>
              <i className="fas fa-exclamation-circle"></i> OOPS Practice - Due:
              14/9
            </li>
            <li>
              <i className="fas fa-exclamation-circle"></i> Django Practice -
              Due: 1/12
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
