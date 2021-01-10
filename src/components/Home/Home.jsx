import React, { useContext } from "react";
import { AppContext } from "../../context/Provider";

export default function Home() {
  const { loaded } = useContext(AppContext);
  return (
    <div className="Home">
      {!loaded && (
        <div className="loading-container">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {loaded && (
        <div className="Home">
          <h1>Utah Jazz</h1>
          <img
            src="https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/1628378.png"
            alt="donovan"
          />
        </div>
      )}
    </div>
  );
}
