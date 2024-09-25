import SvgIcon from "@/components/SvgIcon/SvgIcon";

interface CardSkillsProps {
    name: string;
    icon: React.ElementType; // Cambiado de `any` a `React.ElementType`
    percentaje: string;
    price: number;
    background: string;
};

const CardSkills: React.FC<CardSkillsProps> = ({ name,  icon, percentaje, price, background }) => {
    return (
        <div className="cursor-pointer relative bg-palletTwoSecondary overflow-hidden flex flex-col rounded-md">
            <div className="relative group">
                <div className="overflow-hidden flex justify-center aspect-w-1 aspect-h-1 my-5">
                    <SvgIcon color={'var(--pallet-two-primary)'} background={ background } size={200} name={ icon } />
                </div>
                <h3 className="text-base font-bold text-palletTwoQuaternary">
                    { name }
                    <span className="absolute inset-0" aria-hidden="true"></span>
                </h3>
            </div>
            <p className="mt-2 text-sm font-bold text-palletTwoQuaternary">${ price }</p>
            <div className="m-5">
                <div className="flex items-center">
                    <p className="text-sm font-medium text-palletTwoQuaternary">{ percentaje }%</p>
                </div>
                <div className="mt-2 bg-palletTwoQuaternary h-1.5 rounded-full">
                    <div className={`h-full bg-palletTwoPrimary w-[${ percentaje }%] rounded-full`}></div>
                </div>
            </div>
        </div>
    );
}

export default CardSkills;