import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";

class MyLine extends React.Component {
  render() {
    return (
      <div>
        <b>Timeline</b>
        <hr />
        <Timeline>
          <TimelineEvent
            title="Full-Time with Twitch"
            createdAt="July 2020 - ..."
            iconColor="#f17e33"
            icon={<img src="./static/img/glitch.png" width="120%"></img>}
          >
            Working as a frontend engineer with the Communications team, focusing on Twitch products
            like Chat and Whispers.
          </TimelineEvent>
          <TimelineEvent
            title="18.650: Statistics Grader"
            createdAt="February 2020 - May 2020"
            iconColor="#f17e33"
            icon={<img src="./static/img/grade.png" width="52%"></img>}
          >
            Graded the problem sets and midterms of over 25 students for MIT's 18.650 Statistics
            course.
            <br />
            Reported observations and common mistakes directly to the supervising professor.
          </TimelineEvent>
          <TimelineEvent
            title="MIT web.lab Treasurer"
            createdAt="January 2020"
            iconColor="#f17e33"
            icon={<img src="./static/img/teach.png" width="52%"></img>}
          >
            Taught introductory JavaScript and React to other MIT students.
            <br />
            Planned and managed budget for MIT's 6.148 web.lab course, as well as filed
            reimbursements for staff.
          </TimelineEvent>
          <TimelineEvent
            title="18.600: Probability Grader (Round 2!)"
            createdAt="September 2019 - December 2019"
            iconColor="#f17e33"
            icon={<img src="./static/img/grade.png" width="52%"></img>}
          >
            Graded the weekly problem sets of over 20 students for MIT's 18.600 Probability and
            Random Variables course.
            <br />
            Reported observations and common mistakes directly to the supervising professor.
          </TimelineEvent>
          <TimelineEvent
            title="Internship with Twitch"
            createdAt="June 2019 - August 2019"
            iconColor="#f17e33"
            icon={<img src="./static/img/glitch.png" width="120%"></img>}
          >
            Worked as a frontend engineer with the Communications team, focusing on Twitch products
            like Chat and Whispers.
            <br />
            Designed and developed a new autocomplete interface to help viewers quickly and
            effectively use commands, emotes, or mentions.
          </TimelineEvent>
          <TimelineEvent
            title="18.600: Probability Grader"
            createdAt="February 2019 - May 2019"
            iconColor="#f17e33"
            icon={<img src="./static/img/grade.png" width="52%"></img>}
          >
            Graded the weekly problem sets of over 20 students for MIT's 18.600 Probability and
            Random Variables course.
            <br />
            Reported observations and common mistakes directly to the supervising professor.
          </TimelineEvent>
          <TimelineEvent
            title="18.06 Grader/6.009 Lab Assistant"
            createdAt="September 2018 - December 2018"
            iconColor="#f17e33"
            icon={<img src="./static/img/keyboard.png" width="52%"></img>}
          >
            Graded weekly problem sets and provided feedback to students for MIT's 18.06 Linear
            Algebra course.
            <br />
            Provided instruction and guidance in lab sessions and office hours for MIT's 6.009
            Fundamentals of Programming course.
          </TimelineEvent>
          <TimelineEvent
            title="Research with Prof. Ian Condry"
            createdAt="June 2018 - August 2018"
            iconColor="#f17e33"
            icon={<img src="./static/img/app.png" width="52%"></img>}
          >
            Researched under CMS Professor Ian Condry, focusing on data scraping, cleaning, and
            production methods.
            <br />
            Worked with a team to develop the app UndrGround, used to provide information about live
            music listings in a local area.
          </TimelineEvent>
          <TimelineEvent
            title="18.06: Linear Algebra Grader"
            createdAt="February 2018 - May 2018"
            iconColor="#f17e33"
            icon={<img src="./static/img/grade.png" width="52%"></img>}
          >
            Graded weekly problem sets, using online software, for MIT's 18.06 Linear Algebra
            course.
            <br />
            Recorded scores, trends, and made comments about performance to a supervising graduate
            TA.
          </TimelineEvent>
          <TimelineEvent
            title="MISTI GTL Mexico"
            createdAt="January 2018"
            iconColor="#f17e33"
            icon={<img src="./static/img/teach.png" width="52%"></img>}
          >
            Resided in Guadalajara, Mexico for one month and taught students at{" "}
            <a href="http://prepa.uag.mx/">UAG Prepa</a>.
            <br />
            Prepared lesson plans and motivational materials for various high school classes.
          </TimelineEvent>
          <TimelineEvent
            title="18.02: Calculus Grader"
            createdAt="September 2017 - December 2017"
            iconColor="#f17e33"
            icon={<img src="./static/img/grade.png" width="52%"></img>}
          >
            Graded weekly problem sets for MIT's 18.02 Calculus II course.
            <br />
            Noted trends in student performance and gave feedback to a supervising graduate TA.
          </TimelineEvent>
          <TimelineEvent
            title="Research with Collective Learning"
            createdAt="June 2017 - August 2017"
            iconColor="#f17e33"
            icon={<img src="./static/img/data.png" width="50%"></img>}
          >
            Assisted in Research with the Collective Learning Group at the MIT Media Lab through via
            MIT UROP.
            <br />
            Contributed to the Replot Data Visualization project.
          </TimelineEvent>
          <TimelineEvent
            title="8.02: Physics TA"
            createdAt="February 2017 - May 2017"
            iconColor="#f17e33"
            icon={<img src="./static/img/phys.svg" width="50%"></img>}
          >
            Served as a Teaching Assistant under Prof. Peter Dourmashkin for an 8.02 TEAL class at
            MIT.
            <br />
            Answered student questions and clarified concepts in class, as well as graded homework
            weekly.
          </TimelineEvent>
          <TimelineEvent
            title="Lake Zurich Senior High School"
            createdAt="May 2016"
            iconColor="#f17e33"
            icon={<img src="./static/img/grad.png" width="50%"></img>}
          >
            Graduated from LZHS with Summa Cum Laude Honors.
          </TimelineEvent>
          <TimelineEvent
            title="Makerspace and Technology Assistant"
            createdAt="December 2013 - May 2016"
            iconColor="#f17e33"
            icon={<img src="./static/img/tech.png" width="50%"></img>}
          >
            Worked and managed "The Forge", a makerspace, in the Ela Area Public Library.
            <br />
            Helped patrons understand and utilize Maker technologies, as well as led classes on the
            subject.
          </TimelineEvent>
          <TimelineEvent
            title="Children's Department Page"
            createdAt="August 2013 - December 2013"
            iconColor="#f17e33"
            icon={<img src="./static/img/book.png" width="50%"></img>}
          >
            Worked as a page in the Children's Department of the Ela Area Public Library.
            <br />
            Responsibilities included shelving children's books and assisting patrons in finding
            media.
          </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}

export default MyLine;
