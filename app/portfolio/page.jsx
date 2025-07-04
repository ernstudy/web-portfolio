import PortfolioInfo from "./PortfolioInfo";
import PortfolioProjects from "./PortfolioProjects";

export const metadata = {
  title: "Portfolio | SAINGILLES ERNST | UI/UX Projects & Web Development",
  description:
    "Explore the professional portfolio of SAINGILLES ERNST, showcasing responsive web interfaces, polished UI/UX design, and development projects built with Tailwind CSS, Next.js, and Framer Motion.",
};

export default function page() {
  return (
    <div>
      <PortfolioInfo />
      <PortfolioProjects />
    </div>
  );
}
