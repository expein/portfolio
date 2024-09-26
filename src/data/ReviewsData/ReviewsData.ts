import PDTimg from "@/assets/img/PDT-logo.png";

interface ReviewsItem {
    img: string;
    stars: number;
    review: string;
    name: string;
    startDate: string;
    endDate: string;
};

const ReviewsData: ReviewsItem[] = [
    {
        img: PDTimg.src,
        stars: 4,
        review: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes.",
        name: "PDT Agencia",
        startDate: "Diciembre 20, 2023",
        endDate: "Septiembre 21, 2024",
    },
];

export default ReviewsData;