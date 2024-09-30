import Image from "next/image";
import PdtImg from "@/assets/img/PDT-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface ArticleProps {
    title: string;
    id: number;
    scroll: number;
    price: string;
    onClose: () => void;
}

const Article: React.FC<ArticleProps> = ({ title, id, scroll, price, onClose }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: scroll, behavior: 'smooth' });
    };

    const onHandle = () => {
        scrollToTop();
        onClose();
    };

    return (
        <li className="flex py-5">
            <div className="flex-shrink-0">
                <Image src={PdtImg} alt="pdt" className="object-cover w-16 h-16 rounded-lg" />
            </div>

            <div className="flex items-stretch justify-between flex-1 ml-5 space-x-5">
                <div className="flex flex-col justify-between flex-1">
                    <p className="text-sm font-bold text-palletTwoQuaternary">{ title }</p>
                    <p className="mt-1.5 text-sm font-medium text-palletTwoQuaternary">Cant: { id }</p>
                </div>

                <div className="flex flex-col items-end justify-between">
                    <p className="flex-shrink-0 w-20 text-sm font-bold text-right text-palletTwoTertiary">${ price }</p>

                    <button
                        type="button"
                        className="inline-flex p-2 -m-2 text-palletTwoQuaternary hover:text-palletTwoSecondary hover:bg-palletTwoQuaternary transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        onClick={onHandle}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default Article;