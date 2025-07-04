import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | SAINGILLES ERNST | UI/UX Designer & Web Developer",
  description:
    "Get in touch with SAINGILLES ERNST for UI/UX design collaborations, freelance web development projects, or professional inquiries. Let’s build something impactful together.",
};

export default function page() {
  return (
    <div className={styles.container}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
