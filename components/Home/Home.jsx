import React from "react"
import styles from "./Home.css"
import {Motion, spring} from 'react-motion'
import CopyToClipboard from 'react-copy-to-clipboard'

class Home extends React.Component{

  render() {

    let content = (
      <div>
        <div className={styles.section}>
          <b>Welcome!</b>
          <hr/>
          <div className={styles.text}>
            Hello! You've arrived at the personal website of Matt
            Farejowicz. I'm a rising MIT sophomore, majoring in Course 18C -
            Mathematics with Computer Science. This website will serve
            as a hub for information relevant to me and what I'm up to. I'll
            be doing my best to keep it updated with the most current information.
            Regardless, thanks for visiting, and feel free to take a look around.
            <ul className={styles.list}>
              <li>You can find out more about me and my life over
                in the <span className={styles.hvrpop} onClick={this.props.handleAbout}>About</span> tab. </li>
              <li>You can check out my current and previous work over in
                the <span className={styles.hvrpop} onClick={this.props.handleWork}>Work</span> tab. </li>
              <li>Or you can enjoy some informal, personal interest content over in
                the <span className={styles.hvrpop} onClick={this.props.handleFun}>Fun</span> tab. </li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <b>About this website</b>
          <hr/>
          <div className={styles.text}>
            <p>This website is written in <a className={styles.hvrpop} href="https://facebook.github.io/react/">ReactJS</a>.
            React, developed by Facebook, and maintained by both Facebook
            and the community, is an extremely neat JavaScript library
            that allows users to build their website or webapp piece-by-piece
            in what are known as Components. These components can update via
            self-contained attributes known as states, or communicate with one
            another via attributes known as props. If you are interested in
            functional web design, as I am, I highly encourage you to check React
            out! React also encourages the use of an XML-like syntax called JSX,
            which I compile through a loader known as <a className={styles.hvrpop} href="https://babeljs.io/">Babel</a>,
            and bundle with <a className={styles.hvrpop} href="https://webpack.github.io/">Webpack</a>! </p>
            <p>A majority of the CSS is originally written, however many of the
            hover effects have been used with permission from <a className={styles.hvrpop} href="http://ianlunn.github.io/Hover/">Hover.css</a>,
            a super convenient and abundant library of CSS hover effects. Any
            parts of the website that move utilize the <a className={styles.hvrpop} href="https://github.com/chenglou/react-motion">react-motion</a> library,
            which offers elegant solutions to physics based movement in components. </p>
          </div>
        </div>
        <div className={styles.section}>
          <b>Contact</b>
          <hr/>
          <div className={styles.text}>
            <p>If you'd like to reach me directly, feel free to shoot me an email at <CopyToClipboard text="mfarejow@mit.edu">
                <span className={styles.hvrpop}> mfarejow@mit.edu</span>
              </CopyToClipboard> </p>
            <p>For other links and ways to connect, take a look at the <span className={styles.hvrpop} onClick={this.props.handleAbout}>About</span> tab </p>
          </div>
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
              <div className={styles.container} style={movement} >
                {content}
              </div>
            )
          }}
        </Motion>
      </div>
    )
  }

}

export default Home
