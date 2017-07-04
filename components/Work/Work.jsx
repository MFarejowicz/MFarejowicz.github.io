import React from "react"
import styles from "./Work.css"
import {Motion, spring} from 'react-motion'

class Work extends React.Component{

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
            let movement = {
              left: interpolatingLocation.left
            }
            return (
              <div className={styles.container} style={movement}>
                Work<br/>Coming Soon!
              </div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default Work
