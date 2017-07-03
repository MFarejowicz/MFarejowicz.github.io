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
      <div className={styles.container}>Work<br/>Coming Soon!</div>
    )
  }
}

export default Work
