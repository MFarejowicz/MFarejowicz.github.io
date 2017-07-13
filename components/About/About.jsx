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
          <img src="./static/img/matt.png" alt="Matt" width="20%" style={{float:"right"}}></img>
          Hey there! I'm currently a rising MIT sophomore studying Math with Computer Science.
        </div>
        <List />
        <div className={styles.section}>
          <b>Links</b>
          <hr/>
          <p className={styles.caption}>Find me on some professional networks:</p>
          <ul className={styles.linkList}>
            <li><a className={styles.link} href="https://github.com/MFarejowicz">Github</a></li>
            <li><a className={styles.link} href="https://www.linkedin.com/in/mfarejowicz/">LinkedIn</a></li>
          </ul>
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
