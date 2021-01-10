import React, { useContext } from "react";

import { AppContext } from "../../context/Provider";

/*
  <iframe> not working. Loads http link which cannot be used in a https site.

  <iframe
            title="stream"
            src={link.link}
            allowFullScreen={true}
          ></iframe>
*/

export default function Stream() {
  const { loaded, link } = useContext(AppContext);

  return (
    <div className="Stream">
      {loaded && (
        <>
          <h1>Stream</h1>
          <button className="stream-button">
            <a rel="noreferrer" target="_blank" href={link.link}>
              Watch Now
            </a>
          </button>
          <p>Streams will be live about 30 minutes before tip off.</p>
          <p>Streams are not hosted by this site.</p>
          <p>All content was scraped from other websites and brought here.</p>
          <h3>Enjoy</h3>
        </>
      )}
    </div>
  );
}
