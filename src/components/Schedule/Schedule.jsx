import React, { useContext } from "react";
import { AppContext } from "../../context/Provider";
// components
import Game from "./Game";

export default function Schedule() {
  const { loaded, schedule } = useContext(AppContext);
  return (
    <div className="Schedule">
      <h1>Schedule</h1>
      {loaded &&
        schedule.map((game) => (
          <Game
            key={Math.random()}
            date={game.date}
            opponent={game.opponent}
            time={game.time}
            location={game.location}
            logo={game.logo}
            result={game.result}
            score={game.score}
          />
        ))}
    </div>
  );
}
