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
import nextJS from "../../public/images/skills/next-js.svg";
import typescript from "../../public/images/skills/TypeScript.svg";
import webflow from "../../public/images/skills/Webflow.svg";

import styles from "./Skills.module.css";
import Image from "next/image";

export default function Skills() {
 const skills = [
  {
    name: "JavaScript",
    icon: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black"
  },
  {
    name: "TypeScript",
    icon: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white"
  },
  {
    name: "React",
    icon: "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"
  },
  {
    name: "Next.js",
    icon: "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white"
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white"
  },
  {
  name: "Bootstrap",
  icon: "https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white"
},
{
  name: "Material UI",
  icon: "https://img.shields.io/badge/Material%20UI-0078D4?logo=mui&logoColor=white"
},
  {
    name: "Node.js",
    icon: "https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white"
  },
  {
    name: "Express.js",
    icon: "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white"
  },
  {
    name: "PostgreSQL",
    icon: "https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white"
  },
  {
    name: "Prisma",
    icon: "https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white"
  },
  {
    name: "Supabase",
    icon: "https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white"
  },
  {
    name: "Git",
    icon: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white"
  },
  {
    name: "Docker",
    icon: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white"
  }, 
  {
  name: "Figma",
  icon: "https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white"
},
{
  name: "Filmora",
  icon: "https://img.shields.io/badge/Filmora-00AEEF?logo=wondershare&logoColor=white"
},


];
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Skills :</h3>

      <div className={styles.skills}>
        {skills.map((item, idx) => (
          <div className={styles.circle} key={idx}>
            <div className={styles.icons}>
              <Image
                src={item.icon}
                alt="skills icon"
                className={styles.icon}
                width={500}
                height={500}
              />
            </div>
            {/* <span className={styles.name}>{item.name}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
