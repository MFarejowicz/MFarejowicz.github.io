import React from "react";
import { navigate } from "@reach/router";
import styles from "./Dropdown.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
    };
  }

  getCurrent = () => {
    const path = this.props.currentPath;
    const pathMap = {
      "/": "Home",
      "/about": "About",
      "/work": "Work",
      "/fun": "Fun",
    };
    return pathMap[path];
  };

  select = (item) => {
    this.setState({ listVisible: false });
    navigate(item);
  };

  show = () => {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide, { once: true });
  };

  hide = () => {
    this.setState({ listVisible: false });
  };

  render() {
    return (
      <div className={styles.container}>
        <div onClick={!this.state.listVisible ? this.show : null}>
          <div className={styles.hvrUnderline}>
            <img src="./static/img/drop.png" className={styles.pic}></img>
            {this.getCurrent()}
          </div>
        </div>
        {this.renderListItems()}
      </div>
    );
  }

  renderListItems() {
    const style = {
      hidden: {
        display: "none",
      },
    };

    const items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      const item = this.props.list[i];
      const to = this.props.tos[i];
      items.push(
        <div
          key={item}
          onClick={() => this.select(to)}
          style={
            this.state.listVisible
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
                  top: `${(i + 1) * 53}px`,
                }
              : style.hidden
          }
        >
          <span>{item}</span>
        </div>
      );
    }
    return <div>{items}</div>;
  }
}

export default Dropdown;
