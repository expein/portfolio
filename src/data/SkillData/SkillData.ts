import { IconList } from "@/components/SvgIcon/SvgIcon";

interface SkillItem {
    name: string;
    icon: React.ElementType;
    percentaje: string;
    price: number;
};

const SkillData: SkillItem[] = [
    {
        name: "JavaScript",
        icon: IconList.IconJs,
        percentaje: "90",
        price: 240,  
    },
    {
        name: "TypeScript",
        icon: IconList.IconTs,
        percentaje: "30",
        price: 240,
    },
    {
        name: "PHP",
        icon: IconList.IconPHP,
        percentaje: "90",
        price: 240,
    },
    {
        name: "React",
        icon: IconList.IconReact,
        percentaje: "90",
        price: 240,
    },
    {
        name: "NextJs",
        icon: IconList.IconNextJs,
        percentaje: "30",
        price: 240,
    },
    {
        name: "Laravel",
        icon: IconList.IconLaravel,
        percentaje: "90",
        price: 240,
    },
    {
        name: "Livewire",
        icon: IconList.IconLivewire,
        percentaje: "90",
        price: 240,
    },
    {
        name: "MySQL",
        icon: IconList.IconMySQL,
        percentaje: "70",
        price: 240,
    },
    {
        name: "Figma",
        icon: IconList.IconFigma,
        percentaje: "70",
        price: 240,
    },
    {
        name: "Git",
        icon: IconList.IconGit,
        percentaje: "90",
        price: 240,
    },
    {
        name: "GitHub",
        icon: IconList.IconGitHub,
        percentaje: "90",
        price: 240
    },
    {
        name: "Tailwind",
        icon: IconList.IconTailwind,
        percentaje: "80",
        price: 240
    },
    {
        name: "Redux",
        icon: IconList.IconRedux,
        percentaje: "70",
        price: 240
    }
];

export default SkillData;