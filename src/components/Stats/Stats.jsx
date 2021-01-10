import React, { useContext } from "react";
import { AppContext } from "../../context/Provider";

import Player from "./Player";

export default function Stats() {
  const { stats, loaded } = useContext(AppContext);
  return (
    <div className="Stats">
      <h1>Players</h1>
      {loaded &&
        stats.players.map((player, i) => (
          <Player
            key={i}
            name={player.name}
            position={player.position}
            img={player.img}
          />
        ))}
    </div>
  );
}
