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
      <div className={styles.wrapper}>
        <Motion defaultStyle={{left:-350}} style={{left:spring(0, {stiffness:50, damping:5})}}>
          {interpolatingLocation => {
            let style = {
              left: interpolatingLocation.left
            }
            return (
              <div className={styles.container} style={style}>
                About<br/>Coming Soon!
              </div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default About
