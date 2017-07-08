import React from "react"
import styles from "./Home.css"
import {Motion, spring} from 'react-motion'

class Home extends React.Component{

  render() {
    let content = (
      <div>
        <div className={styles.section}>
          Home
          <hr/>
          Hello! It seems you have stumbled upon the personal website of Matt
          Farejowicz. I am a current MIT sophomore, majoring in Course 18C -
          Mathematics with Computer Science. This website will serve
          as a hub for information relevant to me and what I'm up to. I will
          be doing my best to keep it updated with the most current information.
          Regardless, thanks for visiting, and feel free to take a look around.
          <br/>
          <li>You can find out more about me and my personal interests over
            in the <span className={styles.hvrpop} onClick={this.props.handleAbout}>About</span> tab. </li>
          <li>You can check out my current and previous work over in
            the <span className={styles.hvrpop} onClick={this.props.handleWork}>Work</span> tab. </li>
          <li>Or you can enjoy some informal and comical content over in
            the <span className={styles.hvrpop} onClick={this.props.handleFun}>Fun</span> tab. </li>
        </div>
        <div className={styles.section}>
          About this website
          <hr/>
          This website is written in <a className={styles.hvrpop} href="https://facebook.github.io/react/">ReactJS</a>.
          React, developed by Facebook, and maintained by both Facebook
          and the community, is an extremely neat JavaScript library
          that allows users to build their website or webapp piece-by-piece
          in what are known as Components. These components can update via
          self-contained attributes known as states, or communicate with one
          another via attributes known as props. If you are interested in
          functional web design, as I am, I highly encourage you to check React
          out! React also encourages the use of an XML-like syntax called JSX,
          which I compile through a loader known as <a className={styles.hvrpop} href="https://babeljs.io/">Babel</a>,
          and bundle with <a className={styles.hvrpop} href="https://webpack.github.io/">Webpack</a>!
          <br/>
          <br/>
          A majority of the CSS is originally written, however many of the
          hover effects have been used with permission from <a className={styles.hvrpop} href="http://ianlunn.github.io/Hover/">Hover.css</a>,
          a super convenient and abundant library of CSS hover effects. Any
          parts of the website that move utilize the <a className={styles.hvrpop} href="https://github.com/chenglou/react-motion">react-motion</a> library, which offers elegant solutions to physics based movement in components.
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
