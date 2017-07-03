import React from "react"
import styles from "./About.css"
import {Motion, spring} from 'react-motion'

class About extends React.Component{

  render() {
    if (!this.props.active){
      return (
        <div style={{display: "none"}} />
      )
    }

    return(
      <div className={styles.container}>About<br/>Coming Soon!</div>
    )
  }
}

export default About
