// Dashboard.js
import { Chart, registerables } from "chart.js"; // Import Chart.js and registerables

// Register all necessary components for Chart.js
Chart.register(...registerables);

const months = ["November", "December", "January"];
const daysInMonth = [30, 31, 31];

const attendanceData = {
  November: { present: 25, absent: 3 },
  December: { present: 27, absent: 5 },
  January: { present: 27, absent: 4 },
};

export const randomizeAttendance = () => {
  months.forEach((month, index) => {
    let presentDays =
      Math.floor(Math.random() * (daysInMonth[index] - 27)) + 27;
    let absentDays = daysInMonth[index] - presentDays;
    attendanceData[month] = { present: presentDays, absent: absentDays };
  });
};

export const renderCalendar = (monthIndex) => {
  const calendarContainer = document.getElementById("calendarContainer");
  const currentMonthDisplay = document.getElementById("currentMonth");
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");

  if (
    !calendarContainer ||
    !currentMonthDisplay ||
    !prevMonthBtn ||
    !nextMonthBtn
  )
    return;

  calendarContainer.innerHTML = "";
  const currentYear = monthIndex === 0 || monthIndex === 1 ? 2024 : 2025;
  currentMonthDisplay.textContent = `${months[monthIndex]} ${currentYear}`;

  const totalDays = daysInMonth[monthIndex];
  const attendance = attendanceData[months[monthIndex]];

  const calendarGrid = document.createElement("div");
  calendarGrid.className = "calendar";

  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].forEach((day) => {
    const dayHeader = document.createElement("div");
    dayHeader.textContent = day;
    calendarGrid.appendChild(dayHeader);
  });

  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.className = day <= attendance.present ? "present" : "absent";
    calendarGrid.appendChild(dayElement);
  }

  calendarContainer.appendChild(calendarGrid);

  prevMonthBtn.disabled = monthIndex === 0;
  nextMonthBtn.disabled = monthIndex === months.length - 1;

  renderAttendanceChart(attendance.present, attendance.absent);
};

const renderAttendanceChart = (present, absent) => {
  const ctx = document.getElementById("attendancechart");
  if (window.attendanceChart) {
    window.attendanceChart.destroy(); // Destroy the existing chart instance
  }

  window.attendanceChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Present", "Absent"],
      datasets: [
        {
          data: [present, absent],
          backgroundColor: ["#4CAF50", "#FF5722"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
      },
    },
  });
};

export const renderGradeChart = () => {
  const ctx = document.getElementById("gradechart");
  if (window.gradeChart) {
    window.gradeChart.destroy(); // Destroy the existing chart instance
  }

  window.gradeChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Python", "Next-Js", "Java", "OOPS", "Django (A)"],
      datasets: [
        {
          data: [62, 81, 96, 75, 86],
          backgroundColor: ["green", "blue", "yellow", "red", "black"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
      },
    },
  });
};

const DashboardUtils = {
  randomizeAttendance,
  renderCalendar,
  renderGradeChart,
};

export default DashboardUtils;
