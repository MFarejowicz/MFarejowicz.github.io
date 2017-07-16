import React from "react"
import styles from "./List.css"


class List extends React.Component {

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
            Class and Activity List
            <hr/>
          </div>
        </div>
        <div className={styles.content}>
          {!this.state.active &&
            <div className={styles.clickable}>
              Click to expand this section and see what classes I've taken
              or am taking at MIT, as well as what I'm involved in.
            </div>
          }
          {this.state.active &&
            <div>
              <h4 className={styles.fall}>Fall 2017</h4>
              <ul className={styles.classList}>
                <li>6.01: Introduction to EECS via Robotics</li>
                <li>6.046/18.062: Mathematics for Computer Science</li>
                <li>18.06: Linear Algebra</li>
                <li>CMS.376: History of Media and Technology</li>
                <li>21A.500: Technology and Culture</li>
              </ul>
              <h4 className={styles.summer}>Summer 2017</h4>
              <ul className={styles.classList}>
                <li>UROP with the <a href="https://www.media.mit.edu/groups/collective-learning/overview/">Collective Learning Group</a> at the MIT Media Lab</li>
                <li>Next Haunt Producer (current)</li>
              </ul>
              <h4 className={styles.spring}>Spring 2017</h4>
              <ul className={styles.classList}>
                <li>18.03: Differential Equations</li>
                <li>6.00: Introduction to Computer Science and Programming</li>
                <li>7.014: Introductory Biology</li>
                <li>CMS.301: Introduction to Game Design Methods</li>
                <li>Next House VP of Facilities (current)</li>
                <li>Next Gamers Exec Member (current)</li>
                <li>Next House Intramural Ice Hockey</li>
              </ul>
              <h4 className={styles.winter}>IAP 2017</h4>
              <ul className={styles.classList}>
                <li>6.057: Introduction to MATLAB</li>
                <li>6.178: Introduction to Software Engineering in Java</li>
                <li>MIT Educational Studies Program Admin (current)</li>
              </ul>
              <h4 className={styles.fall}>Fall 2016</h4>
              <ul className={styles.classList}>
                <li>18.02: Calculus II - Multivariable</li>
                <li>8.02: Physics II - Electricity and Magnetism</li>
                <li>5.111: Principles of Chemical Science</li>
                <li>STS.009: Evolution and Society</li>
                <li>Next House 2W Wing Rep</li>
                <li>Next Haunt Build Crew and Run Crew</li>
              </ul>
              <h4>Prior Credit</h4>
              <ul className={styles.classList}>
                <li>8.01: Physics I - Mechanics</li>
                <li>8.02: Calculs I - Single Variable</li>
              </ul>
            </div>
          }
        </div>
      </div>
    )
  }
}


export default List
