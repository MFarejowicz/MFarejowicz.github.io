import React from "react";
import { Link } from "@reach/router";
import styles from "./NavLink.css";

class NavLink extends React.Component {
  isActive = () => {
    return this.props.to === this.props.currentPath;
  };

  render() {
    return (
      <Link className={this.isActive() ? styles.active : styles.hvrUnderline} to={this.props.to}>
        {this.props.title}
      </Link>
    );
  }
}

export default NavLink;
