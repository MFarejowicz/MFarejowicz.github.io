import React from "react";
import styles from "./Dropdown.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
    };
  }

  select(item) {
    this.setState({ listVisible: false });
    this.props.handleChange(item);
  }

  show() {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide.bind(this), { once: true });
  }

  hide() {
    this.setState({ listVisible: false });
  }

  render() {
    return (
      <div className={styles.container}>
        <div onClick={!this.state.listVisible ? this.show.bind(this) : null}>
          <div className={styles.hvrUnderline}>
            <img src="./static/img/drop.png" className={styles.pic}></img>
            {this.props.selected}
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

    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(
        <div
          key={item}
          onClick={this.select.bind(this, item)}
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
