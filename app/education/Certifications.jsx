"use client";
import Image from "next/image";
import styles from "./Certifications.module.css";
import certificationsData from "@/lib/certifications";

export const Certifications = () => {
  return (
    <section className={styles.timeline}>
      {certificationsData.map((cert, idx) => (
        <article key={idx} className={styles.timelineItem}>
          {/* Marker on the line */}
          <div className={styles.markerWrapper}>
            <div className={styles.marker} />
          </div>

          {/* Card */}
          <div className={styles.card}>
            <Image
              src={cert.image}
              alt={cert.subtitle + " logo"}
              className={styles.certLogo}
              onError={(e) => {
                e.target.style.display = "none";
              }}
              width="100"
              height={100}
            />
            <div className={styles.cardBody}>
              <time className={styles.date}>{cert.date}</time>
              <h3 className={styles.title}>{cert.title}</h3>
              <span className={styles.subtitle}>{cert.platform}</span>
              <p className={styles.description}>{cert.description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Certifications;
