import React from "react"
import styles from "./About.css"
import {Motion, spring} from 'react-motion'
import List from "./List/List.jsx"

class About extends React.Component{

  render() {
    let content = (
      <div>
        <div className={styles.section}>
          <b>Biography</b>
          <hr/>
          Hey there! I'm currently a rising MIT sophomore studying Math with Computer Science
        </div>
        <List />
        <div className={styles.section}>
          <b>Links</b>
          <hr/>
        </div>
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

export default About
