import { Link } from "@reach/router";

import "./styles.css";

export const Navlink = (props) => {
  const active = props.to === props.currentPath;

  return (
    <Link className={active ? "Navlink-active" : "Navlink-hvrUnderline"} to={props.to}>
      {props.title}
    </Link>
  );
};
