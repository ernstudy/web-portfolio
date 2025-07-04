"use client";
import { ReactTyped } from "react-typed";
import LinkButton from "../ui/ButtonLink/ButtonLink";
import styles from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        <ReactTyped
          strings={["UI/UX Designer", "Content creator"]}
          typeSpeed={100}
          backSpeed={70}
          loop
        />
      </h1>

      <p className={styles.description}>
        I am a web designer specializing in creating user interfaces (UI) and
        user experiences (UX) for web applications. My goal is to create
        visually appealing, functional, and user-friendly websites, ensuring a
        smooth and enjoyable experience for users.
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
        In 2020, I decided to learn about video creation and began producing
        educational content for YouTube, contributing to the student community.
        My content focuses on language learning, teaching phrases, vocabulary,
        and providing tests to improve listening and speaking comprehension. You
        can find my work on my YouTube channels:{" "}
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
        In my free time, I enjoy listening to podcasts, watching technology
        videos, and documentaries to learn more about the world.
      </p>
    </section>
  );
}
