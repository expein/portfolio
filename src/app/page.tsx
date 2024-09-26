import NavBar from "@/components/Navbar/NavBar";
import SectionMyExperience from "@/components/SectionMyExperience/SectionMyExperience";
import SectionMySkills from "@/components/SectionMySkills/SectionMySkills";
import SectionToMe from "@/components/SectionToMe/SectionToMe";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1440px] w-full">
        <NavBar />
        <SectionToMe />
        <SectionMySkills />
        <SectionMyExperience />
      </div>
    </div>
  );
}
