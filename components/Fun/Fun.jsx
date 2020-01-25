import React from "react";

import styles from "./Fun.css";

class Fun extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <b>Social Links</b>
          <hr />
          <div className={styles.text}>
            <p className={styles.caption}>Find me on some not-so-professional networks:</p>
            <ul className={styles.linkList}>
              <li>
                <a
                  className={styles.link}
                  href="http://steamcommunity.com/profiles/76561198039687446"
                >
                  <img src="./static/img/steam.png" className={styles.icon}></img>
                  Steam
                </a>
              </li>
              <li>
                <a className={styles.link} href="https://myanimelist.net/profile/Nerds6969">
                  <img src="./static/img/mal.png" className={styles.icon}></img>
                  MyAnimeList
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <b>Interest Lists</b>
          <hr />
          <div className={styles.text}>
            <p className={styles.caption}>Favorite books:</p>
            <ul className={styles.favList}>
              <li>House of Leaves</li>
              <li>Blood Meridian</li>
              <li>Cat's Cradle</li>
              <li>Hitchhiker's Guide to the Galaxy</li>
            </ul>
            <hr className={styles.split} />
            <p className={styles.caption}>Favorite programming languages:</p>
            <ul className={styles.favList}>
              <li>Python</li>
              <li>
                Javascript
                <ul className={styles.inFavList}>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>p5.js</li>
                </ul>
              </li>
              <li>Java</li>
            </ul>
            <hr className={styles.split} />
            <p className={styles.caption}>Favorite movies:</p>
            <ul className={styles.favList}>
              <li>The SpongeBob SquarePants Movie</li>
              <li>The Dark Knight Trilogy</li>
            </ul>
            <hr className={styles.split} />
            <p className={styles.caption}>Favorite anime:</p>
            <ul className={styles.favList}>
              <li>One Punch Man</li>
              <li>Danshi Koukousei no Nichijou</li>
            </ul>
            <hr className={styles.split} />
            <p className={styles.caption}>Favorite games:</p>
            <ul className={styles.favList}>
              <li>DotA 2</li>
              <li>The Binding of Isaac: Rebirth</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Fun;
