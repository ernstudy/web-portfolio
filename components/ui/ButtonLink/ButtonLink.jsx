import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./ButtonLink.module.css";

export default function LinkButton({ path, text, style }) {
  return (
    <Link className={styles.button} href={path} style={style}>
      {text} <FaArrowRight className={styles.icon} />
    </Link>
  );
}
