import { navigate } from "@reach/router";

import "./styles.css";

export const Link = (props) => {
  const classes = `Link-hvrpop ${props.small ? "Link-small" : ""}`;

  if (props.internal) {
    return (
      <span className={classes} onClick={() => navigate(props.href)}>
        {props.children}
      </span>
    );
  }

  return (
    <a className={classes} href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
};
