import { useNavigate, useLocation } from "react-router-dom";

import { NavLink } from "./navlink";
import { Dropdown } from "./dropdown";

import me from "../../assets/matthead.png";

import "./styles.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="Navbar-container">
      <div className="Navbar-content">
        <div className="Navbar-brand" onClick={() => navigate("/")}>
          <img src={me} title="Me!" alt="Matt" className="Navbar-pic" />
          <span className="Navbar-name">MattF</span>
        </div>
        <div className="Navbar-links">
          <NavLink title="Home" to="/" currentPath={location.pathname} />
          <NavLink title="About" to="/about" currentPath={location.pathname} />
          <NavLink title="Work" to="/work" currentPath={location.pathname} />
          <NavLink title="Fun" to="/fun" currentPath={location.pathname} />
        </div>
        <Dropdown
          currentPath={location.pathname}
          list={["Home", "About", "Work", "Fun"]}
          tos={["/", "/about", "/work", "/fun"]}
        />
      </div>
    </div>
  );
};
