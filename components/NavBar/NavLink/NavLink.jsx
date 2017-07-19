import React from "react"
import styles from "./NavLink.css"

class NavLink extends React.Component {

  render() {

    return (
      <div className={this.props.active ? styles.active : styles.hvrUnderline} onClick={this.props.handleClick}>
        {this.props.title}
      </div>
    )
  }

}

export default NavLink
