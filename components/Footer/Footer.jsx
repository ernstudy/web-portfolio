"use client";
import { FaFacebook, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
const year = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://github.com/ernstudy">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://linkedin.com/in/ernstudy">
          <FaLinkedinIn className={styles.icon} />
        </a>
        <a href="https://facebook.com/ernstudy">
          <FaFacebook className={styles.icon} />
        </a>
        <a href="https://youtube.com/@ernst_dev">
          <FaYoutube className={styles.icon} />
        </a>
      </div>
      <p className={styles.autor}>© {year}, Ernstudy</p>
    </footer>
  );
}
