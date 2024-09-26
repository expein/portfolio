import Section from "../Section/Section";
import ReviewsData from "@/data/ReviewsData/ReviewsData";
import ReviewCard from "./components/ReviewCard";

const SectionMyExperience = () => {
    return (
        <Section title="Mi experiencia">
            <div className="max-w-2xl mx-auto sm:mt-16">
                <ul className="divide-y divide-gray-200 -my-9">
                  {
                    ReviewsData.map((item, index) => (
                        <ReviewCard
                            key={index}
                            img={item.img}
                            stars={item.stars}
                            review={item.review}
                            name={item.name}
                            startDate={item.startDate}
                            endDate={item.endDate}
                        />
                    ))
                  }  
                </ul>
            </div>
        </Section>
    );
};

export default SectionMyExperience;