import GoshtButton from "@/components/ui/GoshtButton/GoshtButton";
import projectList from "@/lib/projectList";
import Image from "next/image";
import React from "react";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import styles from "./page.module.css";

export default async function page({ params }) {
  const id = await params.id;
  const project = projectList[Number(id)];

  return (
    <section className="section-page">
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.imageWrapper}>
            <Image
              src={project?.image}
              alt={project.image}
              objectFit="cover"
              quality={80}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{project?.name}</h1>
            <p className={styles.description}>{project?.description}</p>
            {/* Button  */}
            <div
              //   sx={{
              //     display: "flex",
              //     justifyContent: { xs: "center", sm: "initial" },
              //     alignItems: "center",
              //     gap: "10px",
              //     marginBottom: "20px",
              //   }}
              className={styles.buttons}
            >
              <GoshtButton
                icon={<FaGithub />}
                text="Code"
                path={project?.gh_link}
              />

              <GoshtButton
                icon={<FaExternalLinkSquareAlt />}
                text="Demo"
                path={project?.site_link}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
