import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Schedule from "./components/Schedule/Schedule";
import Stream from "./components/Stream/Stream";
import Stats from "./components/Stats/Stats";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/stream" component={Stream} />
        <Route path="/stats" component={Stats} />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
