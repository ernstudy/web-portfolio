import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Profile from "@/components/Profile/Profile";
import Skills from "@/components/Skills/Skills";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Home | SAINGILLES ERNST",
  description:
    "Welcome to Ernst's portfolio. Explore UI/UX projects and modern web development case studies.",
};

export default function home() {
  return (
    <div className={styles.container}>
      <div className="block md:hidden">
        <Profile />
      </div>

      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* contact me  */}
      <ContactMe />
    </div>
  );
}
