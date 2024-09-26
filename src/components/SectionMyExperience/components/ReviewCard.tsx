import SvgIcon, { IconList } from "@/components/SvgIcon/SvgIcon";
import Image from "next/image";

interface ReviewCardProps {
    img: string;
    stars: number;
    review: string;
    name: string;
    startDate: string;
    endDate: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ 
    img,
    stars,
    review,
    name,
    startDate,
    endDate,
 }) => {
    return (
        <li className="py-8">
            <div className="flex items-start">
                <div className="w-16 h-11 bg-palletTwoQuaternary rounded-full flex justify-center items-center">
                    <Image
                        className="flex-shrink-0 rounded-full" 
                        src={img}
                        alt={name} 
                        width={64}
                        height={64}
                    />
                </div>
                <div className="ml-6">
                    <div className="flex items-center space-x-px">
                        {
                            Array(5).fill(0).map((_, index) => (
                                <SvgIcon 
                                    key={index} 
                                    name={IconList.IconStart} 
                                    size={20} 
                                    color={index < stars ? "var(--yellow-primary)" : "var(--pallet-two-quaternary)"}
                                />
                            ))
                        }
                    </div>
                    <p className="mt-5 text-base font-normal leading-7 text-palletTwoQuaternary">{ review }</p>
                    <p className="mt-5 text-sm font-bold text-palletTwoQuaternary">{ name }</p>
                    <p className="mt-1 text-sm font-normal text-palletTwoQuaternary">{ startDate } - { endDate }</p>
                </div>
            </div>
        </li>
    );
};

export default ReviewCard;