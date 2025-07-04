import LinkButton from "../ui/ButtonLink/ButtonLink";
import styles from "./Profile.module.css";
export default function Profile() {
  return (
    <div className={styles.profile}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(/images/profile/profile.png)` }}
      ></div>

      <h2 className={styles.name}>Ernst Saint-Gilles</h2>
      <p className={styles.role}>
        I build professional and accessible websites
      </p>
      <div className="block md:hidden mt-3">
        <LinkButton text="Porfolio" path="/portfolio" style={{}} />
      </div>
    </div>
  );
}
