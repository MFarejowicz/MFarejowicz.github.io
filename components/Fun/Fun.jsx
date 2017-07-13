import React from "react"
import styles from "./Fun.css"
import {Motion, spring} from 'react-motion'

class Fun extends React.Component{

  render() {
    let content = (
      <div>
        <div className={styles.section}>
          <b>Social Links</b>
          <hr/>
          <p className={styles.caption}>Find me on some not-so-professional networks:</p>
          <ul className={styles.linkList}>
            <li><a className={styles.link} href="http://steamcommunity.com/profiles/76561198039687446">Steam</a></li>
            <li><a className={styles.link} href="https://myanimelist.net/profile/Nerds6969">MyAnimeList</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <b>Interest Lists</b>
          <hr/>
          Coming soon.
        </div>
        <div className={styles.section}>
          <b>Games</b>
          <hr/>
          Coming soon (iffy on this one).
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

export default Fun
