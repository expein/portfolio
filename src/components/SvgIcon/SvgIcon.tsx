import { SvgIconData } from "@/data/SvgIconData/SvgIconData";

export const IconList = SvgIconData.IconSVG;

interface SvgIconProps {
    name: React.ElementType;
    color: string;
    size: number;
};

const SvgIcon: React.FC<SvgIconProps> = ({ name: Icon, color, size }) => {
    return (
        <Icon 
            style={{
                title: "icon",
                width: `${size}px`,
                height: `${size}px`,
            }}
            fill={color}
        />
    );
};

export default SvgIcon;