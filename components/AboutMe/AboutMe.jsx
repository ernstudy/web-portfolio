"use client";
import { ReactTyped } from "react-typed";
import LinkButton from "../ui/ButtonLink/ButtonLink";
import styles from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        <ReactTyped
          strings={["Software developer", "Content creator"]}
          typeSpeed={100}
          backSpeed={70}
          loop
        />
      </h1>

      <p className={styles.description}>
  I build modern web applications with a focus on creating intuitive user interfaces, reliable backend systems, and scalable digital solutions. I work with frontend and backend technologies to develop complete applications, using tools such as Node.js, databases, APIs, and modern development frameworks.
        <LinkButton
          text="See My Academic Journey"
          path="/education"
          style={{
            textTransform: "none",
            fontSize: { xs: "16px", md: "18px" },
            padding: "0",
            textDecoration: "none",
          }}
        />
      </p>
      <br />

      <p className={styles.description}>
       In 2020, I started creating educational videos for YouTube, helping learners improve their language skills through lessons, vocabulary, phrases, and listening practice. You can find my content on my YouTube channels: {" "}
        <a
          href="https://youtube.com/@aprendemosespanol"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Aprendemos Español
        </a>
        ,{" "}
        <a
          href="https://youtube.com/@ernstschool"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ernst Language School
        </a>
        , and{" "}
        <a
          href="https://youtube.com/@eng-span"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          ENG-SPAN
        </a>
      </p>

      <br />
      <p className={styles.description}>
        {" "}
        In my free time, I enjoy listening to podcasts, watching technology videos, and exploring documentaries to continue learning about software, innovation, and the world around me.
        </p>
    </section>
  );
}
