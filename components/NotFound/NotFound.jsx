import React from "react";
import { Link } from "@reach/router";

import styles from "./NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <h1>Page not found!</h1>
        <div className={styles.backText}>
          Click <Link to="/">here</Link> to head back home
        </div>
      </div>
    );
  }
}

export default NotFound;
