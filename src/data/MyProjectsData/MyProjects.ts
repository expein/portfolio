import MyPortfolio from "@/assets/img/My-portfolio.png";

interface ProjectItem {
    img: string;
    title: string;
    price: string;
    url: string;
};

const MyProjectsData: ProjectItem[] = [
    {
        img: MyPortfolio.src,
        title: "Mi portafolio",
        price: "240",
        url: "https://santiagoalzate.online/",
    }
];

export default MyProjectsData;