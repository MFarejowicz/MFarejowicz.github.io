import React from "react";
import List from "./List/List.jsx";

import styles from "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <b>Biography</b>
          <hr />
          <img src="./static/img/matt.png" title="It's Matt!" alt="Matt" className={styles.pic} />
          <div className={styles.text}>
            <p>
              Hey there! My name is Matthew Farejowicz, but you can call me Matt, MattF, Faree, or
              Joon. I'm a full-time software engineer at Twitch who likes frontend, data
              visualization, probability, video games, volunteering, anime, taking walks, and
              talking to people.
            </p>
            <p>
              I grew up in a small suburban town in Illinois, which is where I completed my
              education though high school. There I developed my love for technology and my love for
              interacting with people, and (perhaps unsurprisingly) my love for interacting with
              people <i>through</i> technology. I worked in my local library, informing people about
              new and creative Maker technologies, and learned an incredible amount about the
              potential of tech through stories people shared with me. Here I was also exposed to
              the beauty of math and programming and how we can problem solve using both.
            </p>
            <p>
              Afterwards, I flew halfway across the country to attend college at MIT. My classes
              allowed me to continue exploring the potential of math and computer science, and the
              incredible amount of student diversity drastically increased my perspective on life. I
              met so many new people, tried countless new foods, procrastinated on too many homework
              assignments, joined student government as my dorm VP, took up teaching through ESP,
              attempted sports for the first time with intramural ice hockey, and it was all an
              unbelievably eye-opening experience.
            </p>
            <p>
              I just recently graduated and started full-time work with Twitch. I'm a frontend
              engineer on the Communications team, working on products like Chat and Whispers. I
              love being able to work on things that people see and directly interact with. I'm
              hoping to learn a lot from my coworkers and grow my web development knowledge even
              more.
            </p>
            <p>
              So that's my story up to this point. How about <i>yours</i>?
            </p>
          </div>
        </div>
        <List />
        <div className={styles.section}>
          <b>Links</b>
          <hr />
          <div className={styles.text}>
            <ul className={styles.linkList}>
              <li>
                <a className={styles.link} href="static/files/resume.pdf">
                  <img src="./static/img/book.png" className={styles.icon}></img>
                  Resume
                </a>
              </li>
              <li>
                <a className={styles.link} href="https://github.com/MFarejowicz">
                  <img src="./static/img/git.png" className={styles.icon}></img>
                  Github
                </a>
              </li>
              <li>
                <a className={styles.link} href="https://www.linkedin.com/in/mfarejowicz/">
                  <img src="./static/img/li.png" className={styles.icon}></img>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
