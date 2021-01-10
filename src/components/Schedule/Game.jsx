import React from "react";

export default function Game({
  date,
  opponent,
  time,
  location,
  result,
  score,
  logo,
}) {
  // fucntions

  function handleTimeResult() {
    if (result) {
      return `${result} ${score}`;
    } else if (result === "live") {
      return "Live";
    } else {
      return `${time} pm`;
    }
  }
  function handleLocation() {
    if (location === "Home") {
      return "vs";
    } else {
      return "@";
    }
  }
  return (
    <div className="Game">
      <img src={logo} alt="logo" />
      <div className="info-container">
        <span className="date-row">
          <p>{date}</p>
          <p>{handleTimeResult()}</p>
        </span>
        <div className="game-row">
          <p>{handleLocation()}</p>
          <h2>{opponent}</h2>
        </div>
      </div>
    </div>
  );
}
