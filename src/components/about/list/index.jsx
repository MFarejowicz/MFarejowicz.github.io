import React from "react";

import open from "../../../assets/open.png";
import close from "../../../assets/close.png";

import "./styles.css";

export const List = () => {
  const [active, setActive] = React.useState(false);

  const toggleActive = React.useCallback(() => {
    setActive((ac) => !ac);
  }, []);

  return (
    <div className="List-outer">
      <div className="List-topBar" onClick={toggleActive}>
        <div>
          <h4 className="List-heading">Class and Activity List</h4>
        </div>
        <div className="List-expand">
          {active ? (
            <img src={close} title="Close" className="List-icon" alt="Close" />
          ) : (
            <img src={open} title="Open" className="List-icon" alt="Open" />
          )}
        </div>
      </div>
      <hr />
      <div className="List-content">
        {!active && (
          <div className="List-clickable">
            Click to expand this section and see what I'm up to now, as well as what I've done in
            the past.
          </div>
        )}
        {active && (
          <div>
            <h2 className="List-sectionTitle">Classes</h2>
            <h4 className="List-summer">Summer 2020 and beyond</h4>
            <ul className="List-classList">
              <li>
                Full-time software engineering with <a href="https://twitch.tv">Twitch</a>
              </li>
            </ul>
            <h4 className="List-spring">Spring 2020</h4>
            <ul className="List-classList">
              <li>6.894: Interactive Data Visualization</li>
              <li>21M.623: Physical Improvisation</li>
              <li>7.URG: Biology UROP</li>
            </ul>
            <h4 className="List-winter">IAP 2020</h4>
            <ul className="List-classList">
              <li>
                Served as treasurer for MIT's{" "}
                <a href="http://weblab.mit.edu/">Web Development Class/Competition</a>, keeping
                track of finances and teaching lectures
              </li>
            </ul>
            <h4 className="List-fall">Fall 2019</h4>
            <ul className="List-classList">
              <li>6.170: Software Studio</li>
              <li>18.424: Seminar in Information Theory</li>
              <li>18.650: Statistics</li>
              <li>CMS.300: Introduction to Game Studies</li>
            </ul>
            <h4 className="List-summer">Summer 2019</h4>
            <ul className="List-classList">
              <li>
                Internship with <a href="https://twitch.tv">Twitch</a> working on the Communications
                team
              </li>
            </ul>
            <h4 className="List-spring">Spring 2019</h4>
            <ul className="List-classList">
              <li>6.031: Software Construction</li>
              <li>6.036: Introduction to Machine Learning</li>
              <li>18.204: Seminar in Discrete Math</li>
              <li>21M.605: Voice and Speech for the Actor</li>
            </ul>
            <h4 className="List-winter">IAP 2019</h4>
            <ul className="List-classList">
              <li>
                Took MIT's <a href="http://weblab.mit.edu/">Web Development Class/Competition</a>,
                and placed third with <a href="http://sound-space.herokuapp.com/">soundspace</a>
              </li>
            </ul>
            <h4 className="List-fall">Fall 2018</h4>
            <ul className="List-classList">
              <li>18.404: Theory of Computation</li>
              <li>6.046/18.410: Design and Analysis of Algorithms</li>
              <li>18.600: Probability and Random Variables</li>
              <li>21M.600: Introduction to Acting</li>
            </ul>
            <h4 className="List-summer">Summer 2018</h4>
            <ul className="List-classList">
              <li>
                UROP with{" "}
                <a href="https://anthropology.mit.edu/people/faculty/ian-condry">
                  Prof. Ian Condry
                </a>{" "}
                working on app development
              </li>
              <li>MIT East Campus Summer RA (round 2!)</li>
            </ul>
            <h4 className="List-spring">Spring 2018</h4>
            <ul className="List-classList">
              <li>18.100A: Real Analysis</li>
              <li>6.006: Introduction to Algorithms</li>
              <li>6.009: Fundamentals of Programming</li>
              <li>CMS.609: The Word Made Digital</li>
              <li>21A.157: The Meaning of Life</li>
            </ul>
            <h4 className="List-winter">IAP 2018</h4>
            <ul className="List-classList">
              <li>
                Taught high schoolers in Guadalajara, Mexico through{" "}
                <a href="http://misti.mit.edu/global-teaching-labs">MIT MISTI GTL</a>
              </li>
            </ul>
            <h4 className="List-fall">Fall 2017</h4>
            <ul className="List-classList">
              <li>6.01: Introduction to EECS via Robotics</li>
              <li>6.042/18.062: Mathematics for Computer Science</li>
              <li>18.06: Linear Algebra</li>
              <li>CMS.376: History of Media and Technology</li>
            </ul>
            <h4 className="List-summer">Summer 2017</h4>
            <ul className="List-classList">
              <li>
                UROP with the{" "}
                <a href="https://www.media.mit.edu/groups/collective-learning/overview/">
                  Collective Learning Group
                </a>{" "}
                at the MIT Media Lab
              </li>
              <li>MIT East Campus Summer RA</li>
            </ul>
            <h4 className="List-spring">Spring 2017</h4>
            <ul className="List-classList">
              <li>18.03: Differential Equations</li>
              <li>6.00: Introduction to Computer Science and Programming</li>
              <li>7.014: Introductory Biology</li>
              <li>CMS.301: Introduction to Game Design Methods</li>
            </ul>
            <h4 className="List-winter">IAP 2017</h4>
            <ul className="List-classList">
              <li>6.057: Introduction to MATLAB</li>
              <li>6.178: Introduction to Software Engineering in Java</li>
            </ul>
            <h4 className="List-fall">Fall 2016</h4>
            <ul className="List-classList">
              <li>18.02: Calculus II - Multivariable</li>
              <li>8.02: Physics II - Electricity and Magnetism</li>
              <li>5.111: Principles of Chemical Science</li>
              <li>STS.009: Evolution and Society</li>
            </ul>
            <h4 className="List-normal">Prior Credit</h4>
            <ul className="List-classList">
              <li>8.01: Physics I - Mechanics</li>
              <li>8.02: Calculus I - Single Variable</li>
            </ul>
            <h2 className="List-sectionTitle">Hobbies and Activities</h2>
            <h4 className="List-activeExtra">Current Hobbies</h4>
            <ul className="List-classList">
              <li>
                Occasional streams on <a href="https://www.twitch.tv/nerds235">Twitch</a>
              </li>
            </ul>
            <h4 className="List-oldExtra">Prior MIT Extracurriculars</h4>
            <ul className="List-classList">
              <li>Next House 2W Wing Rep</li>
              <li>Next Haunt Build Crew and Run Crew</li>
              <li>
                <a href="https://haunt.mit.edu">Next Haunt</a> Producer
              </li>
              <li>Next House Intramural Ice Hockey Team Member</li>
              <li>
                MIT <a href="https://esp.mit.edu">Educational Studies Program</a> Admin
              </li>
              <li>
                <a href="https://next.mit.edu">Next House</a> VP of Facilities
              </li>
              <li>
                <a href="https://next.mit.edu/nextgamers">Next Gamers</a> Video Game Treasurer
              </li>
              <li>Next Anime Founder and President</li>
              <li>
                Writer in the Arts Department for <a href="https://thetech.com/">The Tech</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
