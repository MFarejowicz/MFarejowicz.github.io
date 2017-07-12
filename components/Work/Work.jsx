import React from "react"
import styles from "./Work.css"
import {Motion, spring} from 'react-motion'
import Projects from "./Projects/Projects.jsx"
import MyLine from "./MyLine/MyLine.jsx"

class Work extends React.Component{

  render() {
    let content = (
      <div>
        <div className={styles.section}>
          <Projects />
        </div>
        <div className={styles.section}>
          <MyLine />
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

export default Work
