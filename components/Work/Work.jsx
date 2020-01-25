import React from "react";
import Projects from "./Projects/Projects.jsx";
import MyLine from "./MyLine/MyLine.jsx";

import styles from "./Work.css";

class Work extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <Projects />
        </div>
        <div className={styles.timeline}>
          <MyLine />
        </div>
      </div>
    );
  }
}

export default Work;
