import React from "react"
import ReactDOM from "react-dom"
import styles from "./static/app.css"

class NiceMeme extends React.Component {

  render(){
    return (
      <div className={styles.heading}>
        <h1>Matt Farejowicz</h1>
        <p> MIT sophomore studying Computer Science ^^ </p>
      </div>
    )
  }
}

ReactDOM.render(
  <NiceMeme />,
  document.getElementById("root")
)
