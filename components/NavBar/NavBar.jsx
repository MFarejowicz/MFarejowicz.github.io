import React from "react";
import { navigate, Location } from "@reach/router";
import NavLink from "./NavLink/NavLink.jsx";
import Dropdown from "./Dropdown/Dropdown.jsx";

import styles from "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className={styles.top}>
        <div className={styles.container}>
          <img
            src="./static/img/matthead.png"
            title="Me!"
            height="100%"
            alt="Matt"
            style={{ float: "left", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <NavLink title="Fun" to="/fun" currentPath={this.props.location.pathname} />
          <NavLink title="Work" to="/work" currentPath={this.props.location.pathname} />
          <NavLink title="About" to="/about" currentPath={this.props.location.pathname} />
          <NavLink title="Home" to="/" currentPath={this.props.location.pathname} />
          <Dropdown
            currentPath={this.props.location.pathname}
            list={["Home", "About", "Work", "Fun"]}
            tos={["/", "/about", "/work", "/fun"]}
          />
          <span className={styles.brand} onClick={() => navigate("/")}>
            MattF
          </span>
        </div>
      </div>
    );
  }
}

const NavBarWithLocation = (props) => {
  return (
    <Location>
      {({ location }) => {
        return <NavBar location={location} {...props} />;
      }}
    </Location>
  );
};

export default NavBarWithLocation;
