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
          <div>
            <h4 className={styles.heading}>Class and Activity List</h4>
          </div>
          <div className={styles.expand}>
            {this.state.active ?
              <img src="./static/img/close.png" title="Close" className={styles.icon} alt="Close"></img>
               :
               <img src="./static/img/open.png" title="Open" className={styles.icon} alt="Open"></img>
             }
          </div>
        </div>
        <hr/>
        <div className={styles.content}>
          {!this.state.active &&
            <div className={styles.clickable}>
              Click to expand this section and see what classes I've taken
              or am taking at MIT, as well as what I'm involved in.
            </div>
          }
          {this.state.active &&
            <div>
              <h2 className={styles.sectionTitle}>Classes</h2>
              <h4 className={styles.fall}>Fall 2018</h4>
              <ul className={styles.classList}>
                <li>18.404: Theory of Computation</li>
                <li>18.410: Design and Analysis of Algorithms</li>
                <li>18.600: Probability and Random Variables</li>
                <li>21M.600: Introduction to Acting</li>
              </ul>
              <h4 className={styles.summer}>Summer 2018</h4>
              <ul className={styles.classList}>
                <li>UROP with <a href="https://anthropology.mit.edu/people/faculty/ian-condry">Prof. Ian Condry</a> working on app development</li>
                <li>MIT East Campus Summer RA (round 2!)</li>
              </ul>
              <h4 className={styles.spring}>Spring 2018</h4>
              <ul className={styles.classList}>
                <li>18.100A: Real Analysis</li>
                <li>6.006: Introduction to Algorithms</li>
                <li>6.009: Fundamentals of Programming</li>
                <li>CMS.609: The Word Made Digital</li>
                <li>21A.157: The Meaning of Life</li>
              </ul>
              <h4 className={styles.winter}>IAP 2018</h4>
              <ul className={styles.classList}>
                <li>Taught high schoolers in Guadalajara, Mexico through <a href="http://misti.mit.edu/global-teaching-labs">MIT MISTI GTL</a></li>
              </ul>
              <h4 className={styles.fall}>Fall 2017</h4>
              <ul className={styles.classList}>
                <li>6.01: Introduction to EECS via Robotics</li>
                <li>6.042/18.062: Mathematics for Computer Science</li>
                <li>18.06: Linear Algebra</li>
                <li>CMS.376: History of Media and Technology</li>
              </ul>
              <h4 className={styles.summer}>Summer 2017</h4>
              <ul className={styles.classList}>
                <li>UROP with the <a href="https://www.media.mit.edu/groups/collective-learning/overview/">Collective Learning Group</a> at the MIT Media Lab</li>
                <li>MIT East Campus Summer RA</li>
              </ul>
              <h4 className={styles.spring}>Spring 2017</h4>
              <ul className={styles.classList}>
                <li>18.03: Differential Equations</li>
                <li>6.00: Introduction to Computer Science and Programming</li>
                <li>7.014: Introductory Biology</li>
                <li>CMS.301: Introduction to Game Design Methods</li>
              </ul>
              <h4 className={styles.winter}>IAP 2017</h4>
              <ul className={styles.classList}>
                <li>6.057: Introduction to MATLAB</li>
                <li>6.178: Introduction to Software Engineering in Java</li>
              </ul>
              <h4 className={styles.fall}>Fall 2016</h4>
              <ul className={styles.classList}>
                <li>18.02: Calculus II - Multivariable</li>
                <li>8.02: Physics II - Electricity and Magnetism</li>
                <li>5.111: Principles of Chemical Science</li>
                <li>STS.009: Evolution and Society</li>
              </ul>
              <h4 className={styles.normal}>Prior Credit</h4>
              <ul className={styles.classList}>
                <li>8.01: Physics I - Mechanics</li>
                <li>8.02: Calculus I - Single Variable</li>
              </ul>
              <h2 className={styles.sectionTitle}>Activities</h2>
              <h4 className={styles.activeExtra}>Ongoing Extracurriculars</h4>
              <ul className={styles.classList}>
                <li><a href="https://next.mit.edu">Next House</a> VP of Facilities</li>
                <li><a href="https://next.mit.edu/nextgamers">Next Gamers</a> Video Game Treasurer</li>
                <li>MIT <a href="https://esp.mit.edu">Educational Studies Program</a> Admin</li>
              </ul>
              <h4 className={styles.oldExtra}>Prior Extracurriculars</h4>
              <ul className={styles.classList}>
                <li>Next House 2W Wing Rep</li>
                <li>Next Haunt Build Crew and Run Crew</li>
                <li><a href="https://haunt.mit.edu">Next Haunt</a> Producer</li>
                <li>Next House Intramural Ice Hockey Team Member</li>
              </ul>
            </div>
          }
        </div>
      </div>
    )

  }

}


export default List
