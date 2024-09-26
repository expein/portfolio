import Image from "next/image";

interface CommentCardProps {
    img: string;
    name: string;
    comment: string;
};

const CommentCard: React.FC<CommentCardProps> = ({ img, name, comment }) => {
    return (
        <li className="py-8">
            <div className="flex items-start">
                <div className="w-11 h-11 min-w-11 min-h-11 bg-palletTwoQuaternary rounded-full flex justify-center items-center">
                    <Image
                        className="flex-shrink-0 rounded-full" 
                        src={img}
                        alt={name} 
                        width={64}
                        height={64}
                    />
                </div>
                <div className="ml-6">
                    <p className="mt-5 text-base font-normal leading-7 text-palletTwoQuaternary">{ comment }</p>
                    <p className="mt-5 text-sm font-bold text-palletTwoQuaternary">{ name }</p>
                </div>
            </div>
        </li>
    );
}

export default CommentCard;