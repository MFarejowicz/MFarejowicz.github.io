import React from "react"
import styles from "./Work.css"
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
        <div style={{display: "none"}} />
      )
    }

    return(
      <div className={styles.container}>
        {content}
      </div>
    )

  }

}


export default Work
