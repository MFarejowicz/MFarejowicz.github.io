import React from "react";
import { useNavigate } from "react-router-dom";

import drop from "../../../assets/drop.png";

import "./styles.css";

export const Dropdown = (props) => {
  const [listVisible, setListVisible] = React.useState(false);
  const navigate = useNavigate();

  const getCurrent = React.useCallback(() => {
    const path = props.currentPath;
    const pathMap = {
      "/": "Home",
      "/about": "About",
      "/work": "Work",
      "/fun": "Fun",
    };
    return pathMap[path];
  }, [props.currentPath]);

  const select = React.useCallback(
    (item) => {
      setListVisible(false);
      navigate(item);
    },
    [navigate]
  );

  const hide = React.useCallback(() => {
    setListVisible(false);
  }, []);

  const show = React.useCallback(() => {
    if (listVisible) {
      return;
    }

    setListVisible(true);
  }, [listVisible]);

  React.useEffect(() => {
    if (listVisible) {
      document.addEventListener("click", hide, { once: true });
    }
  }, [listVisible, hide]);

  const renderListItems = React.useCallback(() => {
    const items = [];
    for (let i = 0; i < props.list.length; i++) {
      const item = props.list[i];
      const to = props.tos[i];
      items.push(
        <div
          key={item}
          onClick={() => select(to)}
          style={
            listVisible
              ? {
                  fontSize: "26px",
                  background: "#ffffff",
                  zIndex: "10",
                  border: "1px solid #000000",
                  width: "100px",
                  padding: "11px 0px 10px",
                  textAlign: "center",
                  cursor: "pointer",
                  position: "absolute",
                  left: "0",
                  top: `${(i + 1) * 53}px`,
                }
              : { display: "none" }
          }
        >
          <span>{item}</span>
        </div>
      );
    }
    return <div>{items}</div>;
  }, [listVisible, props.list, props.tos, select]);

  return (
    <div className="Dropdown-container">
      <div onClick={show}>
        <div className="Dropdown-hvrUnderline">
          <img src={drop} alt="Dropdown Menu" className="Dropdown-pic" />
          {getCurrent()}
        </div>
      </div>
      {renderListItems()}
    </div>
  );
};
