import React from "react"
import styles from "./Fun.css"

class Fun extends React.Component{

  render() {

    let content = (
      <div>
        <div className={styles.section}>
          <b>Social Links</b>
          <hr/>
          <div className={styles.text}>
            Find me on some not-so-professional networks:
            <ul className={styles.linkList}>
              <li><a className={styles.link} href="http://steamcommunity.com/profiles/76561198039687446"><img src="./static/img/steam.ico" className={styles.icon}></img>Steam</a></li>
              <li><a className={styles.link} href="https://myanimelist.net/profile/Nerds6969"><img src="./static/img/mal.png" className={styles.icon}></img>MyAnimeList</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <b>Interest Lists</b>
          <hr/>
          <div className={styles.text}>
            Coming soon. 
          </div>
        </div>
        <div className={styles.section}>
          <b>Games</b>
          <hr/>
          <div className={styles.text}>
            Coming soon (iffy on this one).
          </div>
        </div>
      </div>
    )

    if (!this.props.active){
      return(
        <div style={{display: "none"}} />
      )
    }

    return(
      <div className={styles.containerin}>
        {content}
      </div>
    )

  }

}

export default Fun
