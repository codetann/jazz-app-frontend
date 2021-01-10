import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const one = process.env.REACT_APP_URL_ONE;
const two = process.env.REACT_APP_URL_TWO;
const three = process.env.REACT_APP_URL_THREE;

export default function Provider({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [link, setLink] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (loaded) return;
    async function getData() {
      const scheduleData = await axios(one);
      const streamData = await axios(two);
      const statsData = await axios(three);

      setLoaded(true);
      setSchedule(scheduleData.data);
      setLink(streamData.data);
      setStats(statsData.data);
    }
    if (!loaded) getData();
  }, [schedule, loaded]);

  return (
    <AppContext.Provider
      value={{
        loaded,
        schedule,
        link,
        stats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
