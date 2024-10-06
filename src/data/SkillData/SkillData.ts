import { IconList } from "@/components/SvgIcon/SvgIcon";

interface SkillItem {
    name: string;
    icon: React.ElementType;
};

const SkillData: SkillItem[] = [
    {
        name: "JavaScript",
        icon: IconList.IconJs,
    },
    {
        name: "TypeScript",
        icon: IconList.IconTs
    },
    {
        name: "PHP",
        icon: IconList.IconPHP
    },
    {
        name: "React",
        icon: IconList.IconReact
    },
    {
        name: "NextJs",
        icon: IconList.IconNextJs
    },
    {
        name: "Laravel",
        icon: IconList.IconLaravel
    },
    {
        name: "Livewire",
        icon: IconList.IconLivewire
    },
    {
        name: "MySQL",
        icon: IconList.IconMySQL
    },
    {
        name: "Figma",
        icon: IconList.IconFigma
    },
    {
        name: "Git",
        icon: IconList.IconGit
    },
    {
        name: "GitHub",
        icon: IconList.IconGitHub
    },
    {
        name: "Tailwind",
        icon: IconList.IconTailwind
    },
    {
        name: "Redux",
        icon: IconList.IconRedux
    }
];

export default SkillData;