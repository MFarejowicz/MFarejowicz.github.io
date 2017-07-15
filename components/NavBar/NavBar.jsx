import React from "react"
import styles from "./NavBar.css"
import NavLink from "./NavLink/NavLink.jsx"

class NavBar extends React.Component {

  render() {
    return (
      <div className={styles.top}>
        <div className={styles.container}>
          <img src="./static/img/matthead.png" height="100%" alt="Matt" style={{float: "left", cursor: "pointer"}} onClick={this.props.handleHome}></img>
          <NavLink title="Fun" handleClick={this.props.handleFun}/>
          <NavLink title="Work" handleClick={this.props.handleWork}/>
          <NavLink title="About" handleClick={this.props.handleAbout}/>
          <NavLink title="Home" handleClick={this.props.handleHome}/>
          <p className={styles.brand} onClick={this.props.handleHome}>MattF</p>
        </div>
      </div>
    )
  }

}

export default NavBar
