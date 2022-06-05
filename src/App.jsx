import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Work } from "./components/work";
import { Fun } from "./components/fun";
import { NotFound } from "./components/notfound";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
