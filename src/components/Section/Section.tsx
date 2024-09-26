import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    title?: string;
};

const Section: React.FC<SectionProps> = ({ children, title }) => {
    return(
        <section className="py-12 bg-palletTwoPrimary sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-palletTwoQuaternary sm:text-3xl">{ title }</h2>
                </div>
                {children}
            </div>
        </section>
    )
}

export default Section;