import { Link } from "@reach/router";

import "./styles.css";

export const NotFound = () => {
  return (
    <div className="NotFound-section">
      <h1>Page not found!</h1>
      <div className="NotFound-text">
        Click <Link to="/">here</Link> to head back home
      </div>
    </div>
  );
};
