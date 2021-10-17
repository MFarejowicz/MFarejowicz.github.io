import steam from "../../assets/steam.png";
import mal from "../../assets/mal.png";
import twitch from "../../assets/twitch.png";

import "./styles.css";

export const Fun = () => {
  return (
    <div className="Fun-container">
      <div className="Fun-section">
        <b>Social Links</b>
        <hr />
        <div className="Fun-text">
          <p className="Fun-caption">Find me on some not-so-professional networks:</p>
          <ul className="Fun-linkList">
            <li>
              <a className="Fun-link" href="http://steamcommunity.com/profiles/76561198039687446">
                <img src={steam} title="Steam" alt="Steam" className="Fun-icon" />
                Steam
              </a>
            </li>
            <li>
              <a className="Fun-link" href="https://myanimelist.net/profile/Nerds6969">
                <img src={mal} title="MyAnimeList" alt="MyAnimeList" className="Fun-icon" />
                MyAnimeList
              </a>
            </li>
            <li>
              <a className="Fun-link" href="https://www.twitch.tv/nerds235">
                <img src={twitch} title="Twitch" alt="Twitch" className="Fun-icon" />
                Twitch
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Fun-section">
        <b>Interest Lists</b>
        <hr />
        <div className="Fun-text">
          <p className="Fun-caption">Favorite books:</p>
          <ul className="Fun-favList">
            <li>House of Leaves</li>
            <li>Blood Meridian</li>
            <li>Cat's Cradle</li>
            <li>Hitchhiker's Guide to the Galaxy</li>
          </ul>
          <hr className="Fun-split" />
          <p className="Fun-caption">Favorite programming languages:</p>
          <ul className="Fun-favList">
            <li>Python</li>
            <li>
              Javascript
              <ul className="Fun-inFavList">
                <li>React</li>
                <li>TypeScript</li>
                <li>p5.js</li>
              </ul>
            </li>
            <li>Rust</li>
            <li>Java</li>
          </ul>
          <hr className="Fun-split" />
          <p className="Fun-caption">Favorite movies:</p>
          <ul className="Fun-favList">
            <li>The SpongeBob SquarePants Movie</li>
            <li>The Grand Budapest Hotel</li>
            <li>Sorry to Bother You</li>
            <li>The Dark Knight Trilogy</li>
          </ul>
          <hr className="Fun-split" />
          <p className="Fun-caption">Favorite anime:</p>
          <ul className="Fun-favList">
            <li>One Punch Man</li>
            <li>Danshi Koukousei no Nichijou</li>
            <li>That Time I Got Reincarnated as a Slime</li>
          </ul>
          <hr className="Fun-split" />
          <p className="Fun-caption">Favorite games:</p>
          <ul className="Fun-favList">
            <li>Destiny 2</li>
            <li>Pokémon Unite</li>
            <li>DotA 2</li>
            <li>The Binding of Isaac: Rebirth</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
