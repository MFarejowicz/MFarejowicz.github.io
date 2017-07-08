import React from "react"
import styles from "./ClassList.css"


class ClassList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  changeActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {

    return (
      <div className={styles.outer} onClick={(this.state.active ? null : this.changeActive.bind(this))}>
        <div className={styles.topBar} onClick={this.changeActive.bind(this)} >
          <div className={styles.expand}>
            {this.state.active ? "\u2b9d" : "\u2b9f" }
          </div>
          <div className={styles.heading}>
            Class List
            <hr/>
          </div>
        </div>
        <div className={styles.options}>
          {!this.state.active &&
            <div>
              Expand this section if you'd like to see what classes I've taken
              or am taking at MIT!
            </div>
          }
          {this.state.active &&
            <div>
              <h4>Fall 2017</h4>
              <ul>
                <li>6.01: Introduction to Electrical Engineering and Computer Science</li>
                <li>6.046: Mathematics for Computer Science</li>
              </ul>
              <h4>Spring 2016</h4>
              <ul>
                <li>18.03: Differential Equations</li>
                <li>6.00: Introduction to Programming via Python and Data Analysis</li>
                <li>7.014: Introductory Biology</li>
                <li>CMS.301: Introduction to Game Design Methods</li>
              </ul>
              <h4>Fall 2016</h4>
              <ul>
                <li>18.02: Multivariable Calculus</li>
                <li>8.02: Physics: Electricity and Magnetism</li>
                <li>5.111: Principles of Chemical Science</li>
                <li>STS.009: Evolution and Society</li>
              </ul>
            </div>
          }
        </div>
      </div>
    )
  }
}


export default ClassList
