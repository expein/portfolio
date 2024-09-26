'use client'

import Section from "../Section/Section";
import CardSkills from "./components/CardSkills";
import SkillData from "@/data/SkillData/SkillData";

const SectionMySkills = () => {
    return (
        <Section title="Mis habilidades">
            <div className="grid grid-cols-1 gap-6 mt-12 text-center sm:grid-cols-2 lg:gap-5 lg:grid-cols-5 sm:mt-16">
                {
                    SkillData.map((item, index) => (
                        <CardSkills
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            percentaje={item.percentaje}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </Section>
    );
};

export default SectionMySkills;