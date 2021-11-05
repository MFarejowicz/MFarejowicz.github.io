import play from "../../../assets/play.png";
import fit from "../../../assets/fit.png";
import tstyper from "../../../assets/tstyper.png";
import soundspace from "../../../assets/soundspace.png";
import game from "../../../assets/game.png";
import mcd from "../../../assets/mcd.png";
import muse from "../../../assets/muse.png";
import twoe from "../../../assets/2e.png";
import dota from "../../../assets/dota.png";
import stud from "../../../assets/stud.png";
import replot from "../../../assets/replot.png";
import todo from "../../../assets/todo.png";
import moody from "../../../assets/moody.jpg";

import "./styles.css";

export const Projects = () => {
  return (
    <div>
      <b>Projects</b>
      <hr />
      <p className="Projects-description">My current and past projects can be found here:</p>
      <div className="Projects-container">
        <div className="Projects-project">
          <a
            href="https://play-whatever.appspot.com/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={play} alt="Play Whatever"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Play Whatever</h3>
              <p className="Projects-caption">
                An infinite playlist generator for Spotify. Helps you find new music with less
                effort.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://mfarejowicz.github.io/ml-meme/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={fit} alt="Fit your bits"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Fit Your Bits!</h3>
              <p className="Projects-caption">
                Inspired by Hole in the Wall, this game uses a pre-trained model to recognize poses.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://mfarejowicz.github.io/ts-typer/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={tstyper} alt="tstyper"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">TS Typer</h3>
              <p className="Projects-caption">Game made to practice using React with Typescript.</p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="http://sound-space.herokuapp.com/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={soundspace} alt="soundspace"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">soundspace</h3>
              <p className="Projects-caption">
                Worked with Joonho Ko during web.lab to produce a web app about creating sounds with
                friends or stangers.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://next.mit.edu/nextgamers"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={game} alt="Next Gamers"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Next Gamers Website</h3>
              <p className="Projects-caption">
                Designed and built a website for a student group within my dorm, Next Gamers.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://mcd4-me.web.app/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={mcd} alt="McD4Me"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">McD4Me</h3>
              <p className="Projects-caption">
                Created a food order consolidation web app that uses Google's Firebase technology.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="http://music.2east.us"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={muse} alt="2GroovE"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">2E GroovE (offline)</h3>
              <p className="Projects-caption">
                Co-built a web app with Cory Lynch which queues and plays music into the 2E Main
                Lounge. Currently maintained by Alice Nguyen.
              </p>
            </div>
          </a>
        </div>

        <div className="Projects-project">
          <a
            href="https://next2e.github.io/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={twoe} alt="Next 2E"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Next 2E Website</h3>
              <p className="Projects-caption">
                Primary contributor to the website for my wing within Next House, 2E.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://mfarejowicz.github.io/dota-data/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={dota} alt="DotA Data"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">DotA Data</h3>
              <p className="Projects-caption">
                Another example website for Replot, made using data I collected concerning DotA 2, a
                popular E-Sport.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://macroconnections.github.io/replot-example-student-stats"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={stud} alt="Student Stats"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Student Stats (offline)</h3>
              <p className="Projects-caption">
                An example website for Replot, made in collaboration with Nancy Luong. Data provided
                by MIT.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a href="http://replot.io/" className="Projects-link" target="_blank" rel="noreferrer">
            <img className="Projects-picture" src={replot} alt="Replot"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Replot (offline)</h3>
              <p className="Projects-caption"> A ReactJS Data Visualization Library. </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://mfarejowicz.github.io/simple-todo/"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={todo} alt="Simple Todo"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Simple Todo</h3>
              <p className="Projects-caption">
                My first webapp ever. A simple todo list I made that uses JQuery for functionality
                and localStorage to keep list entries across sessions.
              </p>
            </div>
          </a>
        </div>
        <div className="Projects-project">
          <a
            href="https://m3challenge.siam.org/sites/default/files/uploads/0000006996_HM_withcomments.pdf"
            className="Projects-link"
            target="_blank"
            rel="noreferrer"
          >
            <img className="Projects-picture" src={moody} alt="Simple Todo"></img>
            <div className="Projects-projectInfo">
              <h3 className="Projects-title">Moody's Mega Math Challenge</h3>
              <p className="Projects-caption">
                Honorable Mention Team for M^3 <br /> AKA getting to know 3 others very well as you
                compete in a 14 hour math competition.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
