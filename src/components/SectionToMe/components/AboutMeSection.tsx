import AboutMeData from "@/data/AboutMeData/AboutMedata";
import AboutMe from "../components/AboutMe";

const AboutMeSection = () => (
  <div className="flex xl:flex-row flex-col gap-7 w-full">
    {AboutMeData.map((about, index) => (
      <AboutMe key={index} icon={about.icon}>{about.title}</AboutMe>
    ))}
  </div>
);

export default AboutMeSection;