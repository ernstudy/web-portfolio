import HTML_svg from "../../public/images/skills/HTML5.svg";
import CSS_svg from "../../public/images/skills/css.svg";
import JS_svg from "../../public/images/skills/javascript.svg";
import React_svg from "../../public/images/skills/react.svg";
import materialUI_svg from "../../public/images/skills/material-ui.svg";
import bootstrap_svg from "../../public/images/skills/bootstrap.svg";
import tailwind_svg from "../../public/images/skills/tailwind-css.svg";
import git_svg from "../../public/images/skills/git.svg";
import figma_svg from "../../public/images/skills/figma.svg";
import nodejs_svg from "../../public/images/skills/node-js.svg";
import vscode_svg from "../../public/images/skills/vscode.svg";
import filmora_svg from "../../public/images/skills/filmora.svg";
import canva_svg from "../../public/images/skills/canva.svg";
import styles from "./Skills.module.css";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: HTML_svg },
    { name: "CSS", icon: CSS_svg },
    { name: "JavaScript", icon: JS_svg },
    { name: "React", icon: React_svg },
    { name: "Material Ui", icon: materialUI_svg },
    { name: "Bootstrap", icon: bootstrap_svg },
    { name: "Tailwind CSS", icon: tailwind_svg },
    { name: "Git", icon: git_svg },
    { name: "Figma", icon: figma_svg },
    { name: "Node JS", icon: nodejs_svg },
    { name: "VS Code", icon: vscode_svg },
    { name: "Filmora", icon: filmora_svg },
    { name: "Canva", icon: canva_svg },
  ];
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}> Skills :</h3>

      <div className={styles.skills}>
        {skills.map((item, idx) => (
          <div className={styles.circle} key={idx}>
            <div className={styles.icons}>
              <Image
                src={item.icon}
                alt="skills icon"
                className={styles.icon}
              />
            </div>
            <span className={styles.name}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
