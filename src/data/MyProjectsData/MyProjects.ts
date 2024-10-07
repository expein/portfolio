import MyPortfolio from "@/assets/img/My-portfolio.png";

interface ProjectItem {
    img: string;
    title: string;
    url: string;
};

const MyProjectsData: ProjectItem[] = [
    {
        img: MyPortfolio.src,
        title: "Mi portafolio",
        url: "https://santiagoalzate.online/",
    }
];

export default MyProjectsData;