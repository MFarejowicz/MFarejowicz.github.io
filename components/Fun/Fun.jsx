import React from "react"
import styles from "./Fun.css"
import {Motion, spring} from 'react-motion'

class Fun extends React.Component{

  render() {
    let content = (
      <div>
        <b>Fun</b>
        <hr/>
        See what I do for fun!
      </div>
    )

    if (!this.props.active){
      return (
        <div style={{display: "none"}} />
      )
    }

    return(
      <div className={styles.wrapper}>
        <Motion defaultStyle={{left:-350}} style={{left:spring(0, {stiffness:30, damping:5})}}>
          {interpolatingLocation => {
            let movement = {
              left: interpolatingLocation.left
            }
            return (
              <div className={styles.container} style={movement}>
                {content}
              </div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default Fun
