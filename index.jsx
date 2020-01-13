import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import NavBarWithLocation from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Work from "./components/Work/Work.jsx";
import Fun from "./components/Fun/Fun.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

import styles from "./static/app.css";

class Website extends React.Component {
  render() {
    let mobile = /Mobi/.test(navigator.userAgent) && !window.MSStream;
    if (mobile) {
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = "* {cursor: pointer}";
      document.body.appendChild(css);
    }

    return (
      <div>
        <NavBarWithLocation />
        <Router primary={false}>
          <Home path="/" />
          <About path="/about" />
          <Work path="/work" />
          <Fun path="/fun" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Website />, document.getElementById("root"));
