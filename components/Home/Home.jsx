import React from "react";
import { navigate } from "@reach/router";
import CopyToClipboard from "react-copy-to-clipboard";

import styles from "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyVisible: false,
    };
  }

  handleCopy = () => {
    clearTimeout(this.copy);
    this.setState({ copyVisible: true });
    this.copy = setTimeout(() => {
      this.setState({ copyVisible: false });
    }, 3000);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <b>Welcome!</b>
          <hr />
          <div className={styles.text}>
            Hello! You've arrived at the personal website of Matt Farejowicz. I'm a software
            Engineer at Twitch. This website will serve as a hub for information relevant to me and
            what I'm up to. I'll be doing my best to keep it updated with the most current
            information. Regardless, thanks for visiting, and feel free to take a look around.
            <ul className={styles.list}>
              <li>
                You can find out more about me and my life over in the{" "}
                <span className={styles.hvrpop} onClick={() => navigate("/about")}>
                  About
                </span>{" "}
                tab.{" "}
              </li>
              <li>
                You can check out my current and previous work over in the{" "}
                <span className={styles.hvrpop} onClick={() => navigate("/work")}>
                  Work
                </span>{" "}
                tab.{" "}
              </li>
              <li>
                Or you can enjoy some informal, personal interest content over in the{" "}
                <span className={styles.hvrpop} onClick={() => navigate("/fun")}>
                  Fun
                </span>{" "}
                tab.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <b>About this website</b>
          <hr />
          <div className={styles.text}>
            <p>
              This website is written in{" "}
              <a className={styles.hvrpop} href="https://facebook.github.io/react/">
                ReactJS
              </a>
              . React, developed by Facebook, and maintained by both Facebook and the community, is
              an extremely neat JavaScript library that allows users to build their website or
              webapp piece-by-piece in what are known as Components. These Components can update via
              self-contained attributes known as states, or communicate with one another via
              attributes known as props. If you are interested in functional web design, as I am, I
              highly encourage you to check React out! React also encourages the use of an XML-like
              syntax called JSX, which I compile through a loader known as{" "}
              <a className={styles.hvrpop} href="https://babeljs.io/">
                Babel
              </a>
              , and bundle with{" "}
              <a className={styles.hvrpop} href="https://webpack.github.io/">
                Webpack
              </a>
              !{" "}
            </p>
            <p>
              A majority of the CSS is originally written, however many of the hover effects have
              been used with permission from{" "}
              <a className={styles.hvrpop} href="http://ianlunn.github.io/Hover/">
                Hover.css
              </a>
              , a super convenient and abundant library of CSS hover effects. Most website
              Components are also originally written, such as the navbar and dropdown (on mobile).
              React is also extremely flexible because of its Component-based structure, which
              allows community members to create Components and others to import them. For example,
              the timeline found on the Work page was borrowed from{" "}
              <a
                className={styles.hvrpop}
                href="https://www.npmjs.com/package/react-event-timeline"
              >
                react-event-timeline
              </a>
              , which neatly organizes Event Components into the timeline you see.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <b>Contact</b>
          <hr />
          <div className={styles.text}>
            <div className={styles.hold}>
              If you'd like to reach me directly, feel free to shoot me an email at{" "}
              <CopyToClipboard text="mfarejowicz@gmail.com">
                <div onClick={this.handleCopy} className={styles.tooltip}>
                  <span className={styles.hvrpop}> mfarejowicz@gmail.com</span>
                  <span
                    className={styles.tooltipText}
                    style={this.state.copyVisible ? { visibility: "visible" } : null}
                  >
                    Copied to clipboard!
                  </span>
                </div>
              </CopyToClipboard>{" "}
            </div>
            <p>
              For other links and ways to connect, take a look at the{" "}
              <span className={styles.hvrpop} onClick={() => navigate("/about")}>
                About
              </span>{" "}
              tab{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
