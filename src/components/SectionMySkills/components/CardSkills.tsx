import SvgIcon from "@/components/SvgIcon/SvgIcon";

interface CardSkillsProps {
    name: string;
    icon: React.ElementType; // Cambiado de `any` a `React.ElementType`
    percentaje: string;
    price: number;
};

const CardSkills: React.FC<CardSkillsProps> = ({ name,  icon, percentaje, price }) => {
    return (
        <div className="relative bg-palletTwoSecondary overflow-hidden flex flex-col rounded-md">
            <div className="relative group">
                <div className="overflow-hidden flex justify-center aspect-w-1 aspect-h-1 my-5">
                    <SvgIcon color={'var(--pallet-two-primary)'} size={50} name={ icon } />
                </div>
                <h3 className="text-base font-bold text-palletTwoQuaternary">
                    <div className="flex justify-between mx-5 mt-3">
                        { name }
                        <p className="mt-2 text-sm font-bold text-palletTwoQuaternary">${ price }</p>
                    </div>
                    <span className="absolute inset-0" aria-hidden="true"></span>
                </h3>
            </div>
            <div className=" mx-5 my-3">
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