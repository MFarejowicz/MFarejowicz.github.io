import React from "react"
import {Timeline, TimelineEvent} from "react-event-timeline"

class MyLine extends React.Component {

  render() {
    return (
      <div>
        <b>Timeline</b>
        <hr/>
        <Timeline>
          <TimelineEvent title="Collective Learning UROP" createdAt="June 2017 - August 2017">
            Undergrad Research Assistant with the Collective Learning Group at the MIT Media Lab.
          </TimelineEvent>
          <TimelineEvent title="Physics 8.02 TA" createdAt="February 2017 - May 2017">
            Served as a Teaching Assistant under Prof. Peter Dourmashkin for an 8.02 TEAL class at MIT.
          </TimelineEvent>
          <TimelineEvent title="Makerspace and Technology Assistant" createdAt="December 2013 - July 2016">
            Worked and managed the Forge, a makerspace, in the Ela Area Public Library.
          </TimelineEvent>
          <TimelineEvent title="Children's Department Page" createdAt="August 2013 - December 2013">
            Worked as a page in the Children's Department of the Ela Area Public Library.
          </TimelineEvent>
        </Timeline>
      </div>
    )
  }
}

export default MyLine
