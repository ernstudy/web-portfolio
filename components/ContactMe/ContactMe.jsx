import LinkButton from "../ui/ButtonLink/ButtonLink";
import styles from "./ContactMe.module.css";
//
export default function ContactMe() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Let's <span className={styles.decorate}>Talk</span>
      </h2>
      <h3 className={styles.title}>
        Do you look for a Web developer or need a website?
      </h3>
      <LinkButton
        style={{ textTransform: "none" }}
        text="Contact Me Now"
        path="/contact"
      />
    </div>
  );
}
