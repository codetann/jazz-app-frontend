import React from "react";

export default function Home() {
  const img = process.env.REACT_APP_URL_PNG;

  return (
    <div className="Home">
      <h1>Utah Jazz</h1>
      <img
        src="https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/1628378.png"
        alt="donovan"
      />
    </div>
  );
}
