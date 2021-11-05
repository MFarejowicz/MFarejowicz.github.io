import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "../common/link";

import "./styles.css";

export const Home = () => {
  const [copyVisible, setCopyVisible] = React.useState(false);
  const copyTimer = React.useRef();

  const handleCopy = React.useCallback(() => {
    if (copyTimer.current) clearTimeout(copyTimer.current);
    setCopyVisible(true);
    copyTimer.current = setTimeout(() => {
      setCopyVisible(false);
    }, 3000);
  }, []);

  React.useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  return (
    <div className="Home-container">
      <div className="Home-section">
        <b>Welcome!</b>
        <hr />
        <div className="Home-text">
          Hello! You've arrived at the personal website of Matt Farejowicz. I'm a Software Engineer
          at Twitch. This website will serve as a hub for information relevant to me and what I'm up
          to. I'll be doing my best to keep it updated with the most current information.
          Regardless, thanks for visiting, and feel free to take a look around.
          <ul className="Home-list">
            <li>
              You can find out more about me and my life over in the{" "}
              <Link href="/about" internal>
                About
              </Link>{" "}
              page.
            </li>
            <li>
              You can check out my current and previous work over in the{" "}
              <Link href="/work" internal>
                Work
              </Link>{" "}
              page.
            </li>
            <li>
              Or you can enjoy some informal, personal interest content over in the{" "}
              <Link href="/fun" internal>
                Fun
              </Link>{" "}
              page.
            </li>
          </ul>
        </div>
      </div>
      <div className="Home-section">
        <b>Right now I'm...</b>
        <hr />
        <div className="Home-text">
          <ul className="Home-list">
            <li>
              Working on a simple <Link href="https://github.com/MFarejowicz/slash">web game</Link>{" "}
              based on a mechanic from Sucker Punch's Ghost of Tsushima.
            </li>
            <li>
              Trying to learn Rust using their{" "}
              <Link href="https://doc.rust-lang.org/stable/book/title-page.html">nifty book</Link>.
            </li>
            <li>
              Playing a lot of{" "}
              <Link href="https://teamwood.itch.io/super-auto-pets">Super Auto Pets</Link> and{" "}
              <Link href="https://unite.pokemon.com/en-us/">Pokémon Unite</Link>.
            </li>
          </ul>
        </div>
      </div>
      <div className="Home-section">
        <b>About this website</b>
        <hr />
        <div className="Home-text">
          <p>
            Like most of my web development, this website is written in{" "}
            <Link href="https://facebook.github.io/react/">ReactJS</Link> using{" "}
            <Link href="https://github.com/facebook/create-react-app">Create React App</Link>.
          </p>
          <p>
            Most components, such as the navbar, accordions, and dropdown (on mobile) are written by
            me. Others are used with permission from the community, such as the{" "}
            <Link href="https://www.npmjs.com/package/react-event-timeline">event-timeline</Link>{" "}
            found on the{" "}
            <Link href="/work" internal>
              Work
            </Link>{" "}
            page or the{" "}
            <Link href="https://www.npmjs.com/package/react-copy-to-clipboard">
              copy-to-clipboard
            </Link>{" "}
            text found below!
          </p>
          <p>
            A majority of the CSS is also original, however many of the hover effects have been used
            with permission from <Link href="http://ianlunn.github.io/Hover/">Hover.css</Link>, a
            super convenient and abundant library of CSS hover effects.
          </p>
        </div>
      </div>
      <div className="Home-section">
        <b>Contact</b>
        <hr />
        <div className="Home-text">
          <div className="Home-hold">
            If you'd like to reach me directly, feel free to shoot me an email at{" "}
            <CopyToClipboard text="mfarejowicz@gmail.com">
              <div onClick={handleCopy} className="Home-tooltip">
                <span className="Home-hvrpop">mfarejowicz@gmail.com</span>.
                <span
                  className="Home-tooltip--text"
                  style={copyVisible ? { visibility: "visible" } : null}
                >
                  Copied to clipboard!
                </span>
              </div>
            </CopyToClipboard>
          </div>
          <p>
            For other links and ways to connect, take a look at the{" "}
            <Link href="about/" internal>
              About
            </Link>{" "}
            tab.
          </p>
        </div>
      </div>
    </div>
  );
};
