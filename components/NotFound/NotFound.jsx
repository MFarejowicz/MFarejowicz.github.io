import React from "react";

import styles from "./NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div style={styles.section}>
        <h1>Page not found!</h1>
        <div>
          Click <a href="/">here</a> to head back home
        </div>
      </div>
    );
  }
}

export default NotFound;
