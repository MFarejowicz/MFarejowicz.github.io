import { List } from "./list";

import matt from "../../assets/matt.png";
import book from "../../assets/book.png";
import git from "../../assets/git.png";
import linkedin from "../../assets/li.png";

import "./styles.css";

export const About = () => {
  return (
    <div className="About-container">
      <div className="About-section">
        <b>Biography</b>
        <hr />
        <img src={matt} title="It's Matt!" alt="Matt" className="About-pic" />
        <div className="About-text">
          <p>
            Hey there! My name is Matthew Farejowicz, but you can call me Matt, MattF, Faree, or
            Joon. I'm a full-time software engineer at Twitch who likes frontend, data
            visualization, probability, video games, volunteering, anime, taking walks, and talking
            to people.
          </p>
          <p>
            I grew up in a small suburban town in Illinois, which is where I completed my education
            though high school. There I developed my love for technology and my love for interacting
            with people, and (perhaps unsurprisingly) my love for interacting with people{" "}
            <i>through</i> technology. I worked in my local library, informing people about new and
            creative Maker technologies, and learned an incredible amount about the potential of
            tech through stories people shared with me. Here I was also exposed to the beauty of
            math and programming and how we can problem solve using both.
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
            engineer on the Communications team, working on products like Chat and Whispers. I love
            being able to work on things that people see and directly interact with. I'm hoping to
            learn a lot from my coworkers and grow my web development knowledge even more.
          </p>
          <p>
            So that's my story up to this point. How about <i>yours</i>?
          </p>
        </div>
      </div>
      <List />
      <div className="About-section">
        <b>Links</b>
        <hr />
        <div className="About-text">
          <ul className="About-linkList">
            <li>
              <a className="About-link" href="static/files/resume.pdf">
                <img src={book} title="Resume" alt="Resume" className="About-icon"></img>
                Resume
              </a>
            </li>
            <li>
              <a className="About-link" href="https://github.com/MFarejowicz">
                <img src={git} title="GitHub" alt="GitHub" className="About-icon"></img>
                GitHub
              </a>
            </li>
            <li>
              <a className="About-link" href="https://www.linkedin.com/in/mfarejowicz/">
                <img src={linkedin} title="LinkedIn" alt="LinkedIn" className="About-icon"></img>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
