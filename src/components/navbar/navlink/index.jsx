import { useNavigate } from "react-router-dom";

import "./styles.css";

export const NavLink = (props) => {
  const active = props.to === props.currentPath;
  const navigate = useNavigate();

  return (
    <span
      className={active ? "Navlink-active" : "Navlink-hvrUnderline"}
      onClick={() => navigate(props.to)}
    >
      {props.title}
    </span>
  );
};
