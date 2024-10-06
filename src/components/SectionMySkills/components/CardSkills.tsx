import SvgIcon from "@/components/SvgIcon/SvgIcon";

interface CardSkillsProps {
    name: string;
    icon: React.ElementType; // Cambiado de `any` a `React.ElementType`
};

const CardSkills: React.FC<CardSkillsProps> = ({ name,  icon }) => {
    return (
        <div className="relative bg-palletTwoSecondary overflow-hidden flex flex-col rounded-md z-10">
            <div className="relative group">
                <div className="overflow-hidden flex justify-center aspect-w-1 aspect-h-1 my-5">
                    <SvgIcon color={'var(--pallet-two-primary)'} size={50} name={ icon } />
                </div>
                <h3 className="text-base font-bold text-palletTwoQuaternary">
                    <div className="flex justify-center mx-5 my-3">
                        { name }
                    </div>
                    <span className="absolute inset-0" aria-hidden="true"></span>
                </h3>
            </div>
        </div>
    );
}

export default CardSkills;