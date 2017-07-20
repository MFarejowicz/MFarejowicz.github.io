import React from "react"
import ReactDOM from "react-dom"
import styles from "./static/app.css"
import NavBar from "./components/NavBar/NavBar.jsx"
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Work from "./components/Work/Work.jsx"
import Fun from "./components/Fun/Fun.jsx"


class Website extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      homeActive: true,
      aboutActive: false,
      workActive: false,
      funActive: false,
      selected: "Home"
    }
  }

  homeActivator(){
    this.setState({
      homeActive: true,
      aboutActive: false,
      workActive: false,
      funActive: false,
      selected: "Home"
    })
  }

  aboutActivator(){
    this.setState({
      homeActive: false,
      aboutActive: true,
      workActive: false,
      funActive: false,
      selected: "About"
    })
  }

  workActivator(){
    this.setState({
      homeActive: false,
      aboutActive: false,
      workActive: true,
      funActive: false,
      selected: "Work"
    })
  }

  funActivator(){
    this.setState({
      homeActive: false,
      aboutActive: false,
      workActive: false,
      funActive: true,
      selected: "Fun"
    })
  }

  render(){

    var mobile = /Mobi/.test(navigator.userAgent) && !window.MSStream
    if (mobile) {
      var css = document.createElement("style")
      css.type = "text/css"
      css.innerHTML = "* {cursor: pointer}"
      document.body.appendChild(css)
    }

    return (
      <div>
        <NavBar handleHome={this.homeActivator.bind(this)} handleAbout={this.aboutActivator.bind(this)}
          handleWork={this.workActivator.bind(this)} handleFun={this.funActivator.bind(this)} selected={this.state.selected}/>
        <Home active={this.state.homeActive} handleAbout={this.aboutActivator.bind(this)}
          handleWork={this.workActivator.bind(this)} handleFun={this.funActivator.bind(this)}/>
        <About active={this.state.aboutActive} />
        <Work active={this.state.workActive} />
        <Fun active={this.state.funActive} />
      </div>
    )

  }

}


ReactDOM.render(
  <Website />,
  document.getElementById("root")
)
