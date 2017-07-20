import React from "react"
import {Timeline, TimelineEvent} from "react-event-timeline"


class MyLine extends React.Component {

  render() {

    return (
      <div>
        <b>Timeline</b>
        <hr/>
        <Timeline>
          <TimelineEvent title="Research with Collective Learning" createdAt="June 2017 - August 2017" iconColor="#f17e33" icon={<img src="./static/img/data.png" width="50%"></img>}>
            Assisted in Research with the Collective Learning Group at the MIT Media Lab through via MIT UROP.
            <br />
            Contributed to the Replot Data Visualization project.
          </TimelineEvent>
          <TimelineEvent title="Physics 8.02 TA" createdAt="February 2017 - May 2017" iconColor="#f17e33" icon={<img src="./static/img/phys.svg" width="50%"></img>}>
            Served as a Teaching Assistant under Prof. Peter Dourmashkin for an 8.02 TEAL class at MIT.
            <br/>
            Answered student questions and clarified concepts in class, as well as graded homework weekly.
          </TimelineEvent>
          <TimelineEvent title="Lake Zurich Senior High School" createdAt="May 2016" iconColor="#f17e33" icon={<img src="./static/img/grad.png" width="50%"></img>}>
            Graduated from LZHS with Summa Cum Laude Honors.
          </TimelineEvent>
          <TimelineEvent title="Makerspace and Technology Assistant" createdAt="December 2013 - May 2016" iconColor="#f17e33" icon={<img src="./static/img/tech.png" width="50%"></img>}>
            Worked and managed "The Forge", a makerspace, in the Ela Area Public Library.
            <br/>
            Helped patrons understand and utilize Maker technologies, as well as led classes on the subject.
          </TimelineEvent>
          <TimelineEvent title="Children's Department Page" createdAt="August 2013 - December 2013" iconColor="#f17e33" icon={<img src="./static/img/book.png" width="50%"></img>}>
            Worked as a page in the Children's Department of the Ela Area Public Library.
            <br/>
            Responsibilities included shelving children's books and assisting patrons in finding media.
          </TimelineEvent>
        </Timeline>
      </div>
    )

  }

}


export default MyLine
