import React from "react"
import styles from "./Projects.css"


class Projects extends React.Component {

  render() {

    return (
      <div>
        <b>Projects</b>
        <hr/>
        <p className={styles.description}>My past and current projects can be found here:</p>
        <div className={styles.container}>
          <div className={styles.project}>
            <a href="https://m3challenge.siam.org/sites/default/files/uploads/0000006996_HM_withcomments.pdf" className={styles.link}>
              <img className={styles.picture} src="./static/img/moody.jpg" alt="Simple Todo"></img>
              <div className={styles.projectInfo}>
                <h3 className={styles.title}>Moody's Mega Math Challenge</h3>
                <p className={styles.caption}> Honorable Mention Team for M^3 <br/> AKA getting to know 3 others very well as you compete in a 14 hour math competition. </p>
              </div>
            </a>
          </div>
          <div className={styles.project}>
            <a href="https://mfarejowicz.github.io/simple-todo/" className={styles.link}>
              <img className={styles.picture} src="./static/img/todo.png" alt="Simple Todo"></img>
              <div className={styles.projectInfo}>
                <h3 className={styles.title}>Simple Todo</h3>
                <p className={styles.caption}> My first webapp ever. A simple todo list I made that uses JQuery for functionality and localStorage to keep list entries across sessions. </p>
              </div>
            </a>
          </div>
          <div className={styles.project}>
            <a href="#" className={styles.link}>
              <img className={styles.picture} src="./static/img/replot.png" alt="Replot"></img>
              <div className={styles.projectInfo}>
                <h3 className={styles.title}>Replot</h3>
                <p className={styles.caption}> (Coming soon!) A ReactJS Data Visualization Library </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )

  }

}


export default Projects
