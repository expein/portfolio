import Drawer from "@/components/Drawer/Drawer";
import NavBar from "@/components/Navbar/NavBar";
import SectionMySkills from "@/components/SectionMySkills/SectionMySkills";
import SectionToMe from "@/components/SectionToMe/SectionToMe";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1440px] w-full">
        <NavBar />
        <SectionToMe />
        <SectionMySkills />
      </div>
    </div>
  );
}
