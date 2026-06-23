import supabaseCert from "../public/images/ceritfications/supabase-cert.png";
import expressApiCert from "../public/images/ceritfications/cert-express-api.png";
import linuxCert from "../public/images/ceritfications/linux-cert.png";
import englishForITCert from "../public/images/ceritfications/english-for-it-cert.jpg";
import fullstackWeb from "../public/images/ceritfications/fullstack-web.png";
import programmingCert from "../public/images/ceritfications/programming-cert.png";
import uiDesignCert from "../public/images/ceritfications/ui-design-cert.png";
import informaticaCert from "../public/images/ceritfications/informatica-cert.png";

// Certifications data for Education page
const certificationsData = [
  {
    date: "2024",
    title: "Course: UI Design",
    platform: "EDteam",
    description:
      "Techniques and best practices to create beautiful, functional, and impactful interface designs.",
    image: uiDesignCert,
  },
  {
    date: "2023 - 2025",
    title: "The Complete Full-Stack Web Development Bootcamp",
    platform: "Udemy · Angela Yu",
    description:
      "HTML, CSS, JavaScript, Node.js, React, PostgreSQL, Web3 and DApps.",
    image: fullstackWeb,
  },
  {
    date: "2022",
    title: "Course: Programming from Scratch",
    platform: "EDteam",
    description:
      "Foundations of programming logic and software development thinking, in Spanish.",
    image: programmingCert,
  },
  {
    date: "2022",
    title: "Web Page Design",
    platform: "INFOTEP",
    description:
      "Introduction to HTML, CSS, JavaScript and core web design concepts.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    date: "2022",
    title: "Basic Operations of Office Programs",
    platform: "INFOTEP",
    description:
      "Windows OS, Microsoft Office Word, Excel, PowerPoint and productivity tools.",
    image: informaticaCert,
  },
];

const englishForIT = {
  date: 2025,
  title: "English for IT Professionals",
  platform: "Udemy",
  description: "Key vocabulary and grammar to upgrade your IT English",
  image: englishForITCert,
};
certificationsData.unshift(englishForIT);

const supabase = {
  date: 2026,
  title: "Supabase",
  platform: "Platzi",
  description:
    "Build serverless apps with Supabase: create Postgres databases, auto‑generated REST APIs, manage storage, and deploy on Vercel.",
  image: supabaseCert,
};
certificationsData.unshift(supabase);

const expressApi = {
  date: 2026,
  title: " Backend with Node.js: REST API with Express.js",
  platform: "PLatzi",
  description:
    "Learn to build REST APIs with Node.js and Express.js, manage routes, middlewares, validations, errors, and deploy apps to production (Heroku, Vercel).",
  image: expressApiCert,
};
certificationsData.unshift(expressApi);

const linux = {
  date: 2026,
  title: "Linux Environment Setup",
  platform: "PLatzi",
  description:
    "Configure a Linux dev environment, master the terminal, manage packages, use Git/GitHub, and deploy projects with Docker and cloud services.",
  image: linuxCert,
};
certificationsData.unshift(linux);

// const template = {
//   date: 2026,
//   title: "",
//   platform: "",
//   description: "",
//   image: "",
// };

export default certificationsData;
