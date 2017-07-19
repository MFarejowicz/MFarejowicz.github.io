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
        <div className={styles.timeline}>
          <MyLine />
        </div>
      </div>
    )

    if (!this.props.active){
      return(
        <div className={styles.containerout}>
          {content}
        </div>
      )
    }

    return(
      <div className={styles.containerin}>
        {content}
      </div>
    )

  }
}

export default Work
