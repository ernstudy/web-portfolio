"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import timelineElements from "@/lib/education";
import styles from "./education.module.css";
import "./timeLine.css";

const Timeline = () => {
  return (
    <VerticalTimeline className="top-line">
      {timelineElements.map((element, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--work"
          contentStyle={element.bgStyle}
          contentArrowStyle={element.arrowStyle}
          date={element.date}
          iconStyle={element.iconStyle}
          icon={<School />}
          dateClassName="date-timeline"
        >
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {element.subtitle}
          </h4>
          <p> {element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
