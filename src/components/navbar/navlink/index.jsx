import { useNavigate } from "react-router-dom";

import "./styles.css";

export const NavLink = (props) => {
  const navigate = useNavigate();
  const active = props.to === props.currentPath;

  return (
    <span
      className={active ? "Navlink-active" : "Navlink-hvrUnderline"}
      onClick={() => navigate(props.to)}
    >
      {props.title}
    </span>
  );
};
