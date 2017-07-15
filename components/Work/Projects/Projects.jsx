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
            <a href="./components/Work/Links/Todo/todo.html" className={styles.link}>
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
