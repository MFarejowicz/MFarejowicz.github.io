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
      funActive: false
    }
  }

  homeActivator(){
    this.setState({
      homeActive: true,
      aboutActive: false,
      workActive: false,
      funActive: false
    })
  }

  aboutActivator(){
    this.setState({
      homeActive: false,
      aboutActive: true,
      workActive: false,
      funActive: false
    })
  }

  workActivator(){
    this.setState({
      homeActive: false,
      aboutActive: false,
      workActive: true,
      funActive: false
    })
  }

  funActivator(){
    this.setState({
      homeActive: false,
      aboutActive: false,
      workActive: false,
      funActive: true
    })
  }

  render(){
    return (
      <div>
        <NavBar handleHome={this.homeActivator.bind(this)} handleAbout={this.aboutActivator.bind(this)}
          handleWork={this.workActivator.bind(this)} handleFun={this.funActivator.bind(this)}/>
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
