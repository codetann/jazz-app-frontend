import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Provider";

export default function NavBar() {
  const { loaded } = useContext(AppContext);
  const [toggle, setToggle] = useState({
    home: true,
    schedule: false,
    stats: false,
    stream: false,
  });

  function handleHome() {
    setToggle({
      home: true,
      schedule: false,
      stats: false,
      stream: false,
    });
  }
  function handleSchedule() {
    setToggle({
      home: false,
      schedule: true,
      stats: false,
      stream: false,
    });
  }
  function handleStats() {
    setToggle({
      home: false,
      schedule: false,
      stats: true,
      stream: false,
    });
  }
  function handleStream() {
    setToggle({
      home: false,
      schedule: false,
      stats: false,
      stream: true,
    });
  }

  return (
    <div className="NavBar">
      {loaded && (
        <>
          {" "}
          <Link onClick={handleHome} to="/">
            <i
              style={{ color: toggle.home ? "#D5223E" : "" }}
              className="material-icons"
            >
              home
            </i>
          </Link>
          <Link onClick={handleSchedule} to="/schedule">
            <i
              style={{ color: toggle.schedule ? "#D5223E" : "" }}
              className="material-icons"
            >
              calendar_today
            </i>
          </Link>
          <Link onClick={handleStats} to="/stats">
            <i
              style={{ color: toggle.stats ? "#D5223E" : "" }}
              className="material-icons"
            >
              bar_chart
            </i>
          </Link>
          <Link onClick={handleStream} to="/stream">
            <i
              style={{ color: toggle.stream ? "#D5223E" : "" }}
              className="material-icons"
            >
              play_arrow
            </i>
          </Link>
        </>
      )}
    </div>
  );
}
