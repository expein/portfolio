import MyPortfolio from "@/assets/img/My-portfolio.png";
import TradingInversion from "@/assets/img/Trading-Inversion.png";

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
    },
    {
        img: TradingInversion.src,
        title: "Trading e Inversión",
        url: "https://tradinginversion.com/",
    }
];

export default MyProjectsData;