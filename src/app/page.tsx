import NavBar from "@/components/Navbar/NavBar";
import SectionContactMe from "@/components/SectionContactMe/SectionContactMe";
import SectionMyExperience from "@/components/SectionMyExperience/SectionMyExperience";
import SectionMyProjects from "@/components/SectionMyProjects/SectionMyProjects";
import SectionMySkills from "@/components/SectionMySkills/SectionMySkills";
import SectionToMe from "@/components/SectionToMe/SectionToMe";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1440px] w-full">
        <NavBar />
        <section id="sobre-mi">
          <SectionToMe />
        </section>
        <section id="habilidades">
          <SectionMySkills />
        </section>
        <section id="experiencia">
          <SectionMyExperience />
        </section>
        <section id="proyectos">
          <SectionMyProjects />
        </section>
        <section id="contacto">
          <SectionContactMe />
        </section>
      </div>
    </div>
  );
}
