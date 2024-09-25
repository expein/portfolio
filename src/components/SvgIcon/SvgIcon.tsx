import { SvgIconData } from "@/data/SvgIconData/SvgIconData";

export const IconList = SvgIconData.IconSVG;

interface SvgIconProps {
    name: React.ElementType;
    color: string;
    size: number;
    background?: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({ name: Icon, color, size, background }) => {
    return (
        <Icon 
            style={{
                title: "icon",
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: background,
            }}
            fill={color}
        />
    );
};

export default SvgIcon;