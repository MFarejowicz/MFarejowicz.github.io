import React from "react"
import styles from "./Home.css"
import {Motion, spring} from 'react-motion'

class Home extends React.Component{

  render() {
    if (!this.props.active){
      return (
        <div style={{display: "none"}} />
      )
    }

    return(
      <div className={styles.container}>Home<br/>Coming Soon!</div>
    )
  }
}

export default Home
