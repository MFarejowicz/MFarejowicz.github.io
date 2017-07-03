import React from "react"
import styles from "./Fun.css"
import {Motion, spring} from 'react-motion'

class Fun extends React.Component{

  render() {
    if (!this.props.active){
      return (
        <div style={{display: "none"}} />
      )
    }

    return(
      <div className={styles.container}>Fun<br/>Coming Soon!</div>
    )
  }
}

export default Fun
