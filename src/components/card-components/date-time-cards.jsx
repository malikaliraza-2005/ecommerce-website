import React from "react";
import "./date-time-cards.css";
const DateTimeCard = ({ number, text }) => {
  return (
    <div className="date-time-card">
      <h3>{number}</h3>
      <p>{text}</p>
    </div>
  );
};

export default DateTimeCard;
