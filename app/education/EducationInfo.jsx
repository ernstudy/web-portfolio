import React from "react";
import styles from "./education.module.css";

export default function EducationInfo() {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Academic and Professional Journey</h1>
      <p className={styles.content}>
        {" "}
        I am a dedicated student committed to knowledge and education. In 2022,
        I completed a course in Basic Operations of Office Programs.
        Subsequently, I continued my studies in Web Page Design at the National
        Institute of Technical Professional Training (
        <a
          href="https://www.infotep.gob.do/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          INFOTEP
        </a>
        ) in the Dominican Republic. With the aim of perfecting my skills, I
        have delved deeper into web design through online courses on well-known
        platforms such as {""}
        <a
          href="http://udemy.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Udemy
        </a>
        ,{" "}
        <a
          href="https://ed.team"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          EDteam
        </a>{" "}
        , and{" "}
        <a
          href="https://www.youtube.com/results?search_query=web+development"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          YouTube
        </a>
        .
      </p>
      <br />
      <p className={styles.content}>
        As a content creator, I have dedicated numerous daily hours in front of
        the computer to practice and enhance my skills in both content creation
        and web design.
      </p>
    </div>
  );
}
