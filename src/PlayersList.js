
import React from "react";
import Player from "./Player";
import playersData from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap",justifyContent: "center"}}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

