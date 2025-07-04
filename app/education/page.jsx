import EducationInfo from "./EducationInfo";
import Timeline from "./EducationTimeLine";
export const metadata = {
  title: "Education | SAINGILLES ERNST | Frontend Skills & UI/UX Learning",
  description:
    "Learn more about SAINGILLES ERNST's journey in web development and UI/UX design — from mastering responsive layouts and Google Fonts to building interactive, scalable applications.",
};

export default function page() {
  return (
    <div>
      <EducationInfo />
      <Timeline />
    </div>
  );
}
