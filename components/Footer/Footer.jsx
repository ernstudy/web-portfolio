"use client";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
const year = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="#">
          <FaGithub className={styles.icon} />
        </a>
        <a href="#">
          {" "}
          <FaLinkedinIn className={styles.icon} />
        </a>
        <a href="#">
          <FaFacebook className={styles.icon} />
        </a>
        <a href="#">
          <FaYoutube className={styles.icon} />
        </a>
      </div>
      <p className={styles.autor}>© {year}, Ernstudy</p>
    </footer>
  );
}
