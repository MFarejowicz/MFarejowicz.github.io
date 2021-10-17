import { Router } from "@reach/router";

import { NavBarWithLocation } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Work } from "./components/work";
import { Fun } from "./components/fun";
import { NotFound } from "./components/notfound";

export const App = () => {
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
};
