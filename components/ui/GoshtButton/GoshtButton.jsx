import Link from "next/link";
import React from "react";
import styles from "./GoshtButton.module.css";

export default function GoshtButton({ text, path, icon }) {
  return (
    <Link className={styles.button} href={path}>
      {text}
      {icon}
    </Link>
  );
}
