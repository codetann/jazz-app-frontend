import React, { useContext } from "react";

import { AppContext } from "../../context/Provider";

export default function Stream() {
  const { loaded, link } = useContext(AppContext);
  return (
    <div className="Stream">
      {loaded && (
        <>
          <h1>Stream</h1>
          <iframe
            title="stream"
            src={link.link}
            allowFullScreen={true}
          ></iframe>
          <p>Streams will be live about 30 minutes before tip off.</p>
          <p>Streams are not hosted by this site.</p>
          <p>All content was scraped from other websites and brought here.</p>
          <h3>Enjoy</h3>
        </>
      )}
    </div>
  );
}
