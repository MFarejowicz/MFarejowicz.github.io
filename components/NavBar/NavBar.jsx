import React from "react"
import styles from "./NavBar.css"
import NavLink from "./NavLink/NavLink.jsx"
import Dropdown from "./Dropdown/Dropdown.jsx"

class NavBar extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     selected:
  //   }
  // }

  handleHome(){
    this.setState({selected: "Home"})
    this.props.handleHome()
  }

  switchSelected(newPane){
    switch (newPane) {
      case "Home":
        this.props.handleHome()
        break;
      case "About":
        this.props.handleAbout()
        break;
      case "Work":
        this.props.handleWork()
        break;
      case "Fun":
        this.props.handleFun()
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={styles.top}>
        <div className={styles.container}>
          <img src="./static/img/matthead.png" title="Me!" height="100%" alt="Matt" style={{float: "left", cursor: "pointer"}} onClick={this.props.handleHome}></img>
          <NavLink title="Fun" handleClick={this.props.handleFun}/>
          <NavLink title="Work" handleClick={this.props.handleWork}/>
          <NavLink title="About" handleClick={this.props.handleAbout}/>
          <NavLink title="Home" handleClick={this.props.handleHome}/>
          <Dropdown selected={this.props.selected} list={["Home", "About", "Work", "Fun"]} handleChange={this.switchSelected.bind(this)}/>
          <span className={styles.brand} onClick={this.props.handleHome}>MattF</span>
        </div>
      </div>
    )
  }

}

export default NavBar
