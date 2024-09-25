import { IconList } from "@/components/SvgIcon/SvgIcon";

interface SkillItem {
    name: string;
    icon: React.ElementType;
    percentaje: string;
    price: number;
    background: string;
};

const SkillData: SkillItem[] = [
    {
        name: "JavaScript",
        icon: IconList.IconJs,
        percentaje: "90",
        price: 240,  
        background: "var(--pallet-two-quaternary)"
    },
    {
        name: "TypeScript",
        icon: IconList.IconTs,
        percentaje: "30",
        price: 240,
        background: ""
    },
    {
        name: "PHP",
        icon: IconList.IconPHP,
        percentaje: "90",
        price: 240,
        background: ""
    },
    {
        name: "React",
        icon: IconList.IconReact,
        percentaje: "90",
        price: 240,
        background: ""
    },
    {
        name: "NextJs",
        icon: IconList.IconNextJs,
        percentaje: "30",
        price: 240,
        background: ""
    },
    {
        name: "Laravel",
        icon: IconList.IconLaravel,
        percentaje: "90",
        price: 240,
        background: ""
    },
    {
        name: "Livewire",
        icon: IconList.IconLivewire,
        percentaje: "90",
        price: 240,
        background: ""
    },
    {
        name: "MySQL",
        icon: IconList.IconMySQL,
        percentaje: "90",
        price: 240,
        background: ""
    },
    {
        name: "Figma",
        icon: IconList.IconFigma,
        percentaje: "90",
        price: 240,
        background: ""
    }
];

export default SkillData;