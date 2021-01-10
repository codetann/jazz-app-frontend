import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/Provider";

export default function Player({ name, position, img }) {
  const { stats } = useContext(AppContext);
  const [playerStats, setPlayerStats] = useState(false);
  const data = stats.stats;

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (playerStats) return;
    const found = data.find((e) => e.player === name);
    setPlayerStats(found);
  }, [playerStats, data, name]);

  return (
    <>
      {!toggle && (
        <div onClick={() => setToggle(true)} className="Player">
          <img src={img} alt={name} />
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p style={{ color: "#858585" }}>{position}</p>
        </div>
      )}
      {toggle && (
        <div className="Player-Stats">
          <span className="nav">
            <i
              onClick={() => setToggle(false)}
              className="fas fa-chevron-left"
            ></i>
            <h1>{name}</h1>
          </span>
          <div className="img-container">
            <img src={img} alt={name} />
          </div>

          <div className="stats-container">
            <h2>Stats</h2>
            <div className="player-stats">
              {/* row one */}
              <div className="row">
                <div className="stat">
                  <p>PTS</p>
                  <h2>{playerStats.pts}</h2>
                </div>
                <div className="stat">
                  <p>AST</p>
                  <h2>{playerStats.ast}</h2>
                </div>
                <div className="stat">
                  <p>REB</p>
                  <h2>{playerStats.reb}</h2>
                </div>
              </div>
              {/* row two */}
              <div className="row">
                <div className="stat">
                  <p>STL</p>
                  <h2>{playerStats.stl}</h2>
                </div>
                <div className="stat">
                  <p>BLK</p>
                  <h2>{playerStats.blk}</h2>
                </div>
                <div className="stat">
                  <p>MIN</p>
                  <h2>{playerStats.min}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
