import Section from "../Section/Section";
import MyProjectsData from "@/data/MyProjectsData/MyProjects";
import CardProject from "./components/CardProject";

const SectionMyProjects = () => {
    return(
        <Section title="Mis proyectos">
            <div className="grid grid-cols-1 gap-6 mt-12 text-center sm:grid-cols-2 lg:gap-5 lg:grid-cols-4 sm:mt-16 rounded-md">
                {
                    MyProjectsData.map((item, index) => (
                        <CardProject
                            key={index}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            url={item.url}
                        />
                    ))
                }
            </div>
        </Section>
    );
};

export default SectionMyProjects;