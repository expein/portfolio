import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

interface CardProjectProps {
    img: string;
    title: string;
    url: string;
};

const CardProject: React.FC<CardProjectProps> = ({ img, title, url }) => {
    return (
        <div>
            <div className="relative bg-palletTwoSecondary overflow-hidden flex flex-col rounded-md">
                <div className="absolute top-3 right-3">
                    <p className="inline-flex items-center justify-center px-2 py-1.5 text-xs font-bold tracking-wide text-white uppercase bg-gray-600 rounded">Sale</p>
                </div>
                <div className="relative group">
                    <div className="overflow-hidden p-2 aspect-w-1 aspect-h-1">
                        <Image 
                            className="object-cover w-full h-full transition-all duration-300 rounded-md" 
                            src={ img } 
                            alt="" 
                            width={500}  // Ajusta el valor según sea necesario
                            height={500} // Ajusta el valor según sea necesario
                        />
                    </div>
                    <h3 className="text-base font-bold text-palletTwoQuaternary">
                        { title }
                        <span className="absolute inset-0" aria-hidden="true"></span>
                    </h3>
                </div>
                <div className="relative mt-auto">
                    <Link href={ url } passHref>
                        <Button style="relative flex items-center justify-center w-full px-4 py-4 mt-4 text-sm font-bold transition-all duration-200 bg-transparent border-palletTwoQuaternary group">
                            <span className="absolute inset-0 h-full transition-all duration-200 origin-bottom translate-y-full bg-palletTwoTertiary group-hover:translate-y-0"></span>
                            <span className="relative text-palletTwoQuaternary"> Ver </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardProject;