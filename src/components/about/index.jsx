import { List } from "./list";
import { Link } from "../common/link";

import matt from "../../assets/matt.png";
import book from "../../assets/book.png";
import git from "../../assets/git.png";
import linkedin from "../../assets/li.png";

import resume from "../../assets/resume.pdf";

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
            Joon. I'm a full-time Software Engineer at Twitch who likes front end, data
            visualization, video games, anime, volunteering, rollerblading, taking long walks, and
            talking to people.
          </p>
          <p>
            I grew up in a small suburban town in Illinois, where I completed my education though
            high school. There I developed my love for technology and my love for interacting with
            people, and (perhaps unsurprisingly) my love for interacting with people <i>through</i>{" "}
            technology. I worked in my local library, informing people about new and creative Maker
            technologies, and learned an incredible amount about the potential of tech through
            stories people shared with me. Here I was also exposed to the beauty of math and
            programming and how we can problem solve using both.
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
            I graduated and immediately started full-time work with Twitch. I'm a front-end engineer
            on the Community Engagement team, working to help streamers better connect with their
            communities. I love being able to work on things that people see and interact with. I'm
            always learning a lot from my coworkers and hoping to grow my web development knowledge
            even more. Just recently, I started to explore full-stack development.
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
              <Link href={resume}>
                <img src={book} title="Resume" alt="Resume" className="About-icon" />
                Résumé (slightly outdated)
              </Link>
            </li>
            <li>
              <Link href="https://github.com/MFarejowicz">
                <img src={git} title="GitHub" alt="GitHub" className="About-icon" />
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mfarejowicz/">
                <img src={linkedin} title="LinkedIn" alt="LinkedIn" className="About-icon" />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
