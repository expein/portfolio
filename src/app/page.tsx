import SectionContactMe from "@/components/SectionContactMe/SectionContactMe";
import SectionMyExperience from "@/components/SectionMyExperience/SectionMyExperience";
import SectionMyProjects from "@/components/SectionMyProjects/SectionMyProjects";
import SectionMySkills from "@/components/SectionMySkills/SectionMySkills";
import SectionToMe from "@/components/SectionToMe/SectionToMe";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1440px] w-full">
        <SectionToMe />
        <SectionMySkills />
        <SectionMyExperience />
        <SectionMyProjects />
        <SectionContactMe />
      </div>
    </div>
  );
}
