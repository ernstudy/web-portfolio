import styles from "./contact.module.css";
export default function ContactInfo() {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>
        Looking for a Web designer or need a website?
      </h1>
      <p className={styles.content}>
        I am ready to create or collaborate with you on any project. Contact me
        today to discuss the details and get started right away.
        <br />
        <br />
      </p>

      <p className={styles.content}> Email Address: hey@ernstudy.com</p>
    </div>
  );
}
