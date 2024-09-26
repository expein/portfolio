'use client'

import CardSkills from "./components/CardSkills";
import SkillData from "@/data/SkillData/SkillData";

const SectionMySkills = () => {
    return (
        <section className="py-12 bg-palletTwoPrimary sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-palletTwoQuaternary sm:text-3xl">Mis habilidades</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-palletTwoQuaternary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                </div>

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
            </div>
        </section>
    );
};

export default SectionMySkills;