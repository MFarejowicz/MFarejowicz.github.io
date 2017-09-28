import React from "react"
import styles from "./About.css"
import List from "./List/List.jsx"


class About extends React.Component{

  render() {

    let content = (
      <div>
        <div className={styles.section}>
          <b>Biography</b>
          <hr/>
          <img src="./static/img/matt.png" title="It's Matt!" alt="Matt" className={styles.pic}></img>
          <div className={styles.text}>
            <p>Hey there! My name is Matthew Farejowicz, but you can call me Matt, MattF, Faree, or Joon. I'm an MIT Sophomore who
            likes, math, computer science, video games, volunteering, anime, taking walks, and talking to people. </p>
            <p>I grew up in a small suburban town in Illinois, which is where I completed my education though high school. There I developed my love for
            technology and my love for interacting with people, and (perhaps unsurprisingly) my love for interacting with people <i>through</i> technology.
            I worked in my local library, informing people about new and creative Maker technologies, and learned an incredible amount about the potential of tech through stories people
            shared with me. Here I was also exposed to the beauty of math and programming and how we can problem solve using both.</p>
            <p> Afterwards, I flew halfway across the country to start college at MIT, which is where I find myself now. My classes have allowed me to continue exploring
            the potential of math and computer science, and the incredible amount of student diversity has drastically increased my perspective on life. I've met so many new people,
            tried countless new foods, procrastinated on too many homework assignments, joined student government as my dorm VP, took up teaching through ESP, attempted sports for the first time with
            intramural ice hockey, and it's all been an unbelievably eye-opening experience.</p>
            <p>Right now I'm grooving through my sophomore year, taking classes more related to my major, which I much prefer over the gen-eds I took last year that are required for every MIT undergrad.
            In my spare time, I'm attempting to produce a self-contained two-story haunted-house escape-the-room for this upcoming
            October, as part of a student group in my dorm called <i>Next Haunt</i>. In classic me fashion, I find myself probably overcommitted, balancing social shenanigans with professional endeavors.
            And I wouldn't want it any other way.</p>
            <p>So that's my story up to this point. How about <i>yours</i>?</p>
          </div>
        </div>
        <List />
        <div className={styles.section}>
          <b>Links</b>
          <hr/>
          <div className={styles.text}>
            <p className={styles.caption}>Find me on some professional networks:</p>
            <ul className={styles.linkList}>
              <li><a className={styles.link} href="https://github.com/MFarejowicz"><img src="./static/img/git.png" className={styles.icon}></img>Github</a></li>
              <li><a className={styles.link} href="https://www.linkedin.com/in/mfarejowicz/"><img src="./static/img/li.png" className={styles.icon}></img>LinkedIn</a></li>
            </ul>
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
      <div className={styles.container}>
        {content}
      </div>
    )

  }

}


export default About
