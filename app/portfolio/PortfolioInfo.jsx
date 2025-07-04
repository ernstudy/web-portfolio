import React from "react";
import styles from "./portfolio.module.css";

export default function PortfolioInfo() {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>Featured Web Design Projects</h1>
      <p className={styles.content}>
        Here are some projects I have created. Some are fictional, while others
        are real projects to which I have dedicated a lot of love and necessary
        time.
      </p>
    </div>
  );
}
