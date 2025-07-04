import projectList from "@/lib/projectList";
import styles from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/profile/profile.png";

export default async function PortfolioProjects() {
  return (
    <div className={styles.projects}>
      <div className={styles.boxes}>
        {projectList.map((project, idx) => (
          <Link
            href={`/portfolio/${idx}`}
            className={styles.box}
            key={idx}
            // onClick={() => navigate(`${idx}`)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt="Imagen del proyecto"
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </div>
            <div className={styles.projectTitle}>{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
