import { navigate, Location } from "@reach/router";
import { Navlink } from "./navlink";
import { Dropdown } from "./dropdown";

import me from "../../assets/matthead.png";

import "./styles.css";

const Navbar = (props) => {
  return (
    <div className="Navbar-container">
      <div className="Navbar-content">
        <div className="Navbar-brand">
          <img
            src={me}
            title="Me!"
            alt="Matt"
            className="Navbar-pic"
            onClick={() => navigate("/")}
          />
          <span className="Navbar-name" onClick={() => navigate("/")}>
            MattF
          </span>
        </div>
        <div className="Navbar-links">
          <Navlink title="Home" to="/" currentPath={props.location.pathname} />
          <Navlink title="About" to="/about" currentPath={props.location.pathname} />
          <Navlink title="Work" to="/work" currentPath={props.location.pathname} />
          <Navlink title="Fun" to="/fun" currentPath={props.location.pathname} />
        </div>
        <Dropdown
          currentPath={props.location.pathname}
          list={["Home", "About", "Work", "Fun"]}
          tos={["/", "/about", "/work", "/fun"]}
        />
      </div>
    </div>
  );
};

export const NavBarWithLocation = (props) => {
  return (
    <Location>
      {({ location }) => {
        return <Navbar location={location} {...props} />;
      }}
    </Location>
  );
};
