import { Projects } from "./projects";
import { MyLine } from "./myline";

import "./styles.css";

export const Work = () => {
  return (
    <div className="Work-container">
      <div className="Work-section">
        <Projects />
      </div>
      <div className="Work-timeline">
        <MyLine />
      </div>
    </div>
  );
};
