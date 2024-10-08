import PDTimg from "@/assets/img/PDT-logo.png";

interface CommentsItem {
    img: string;
    review: string;
    name: string;
};

interface ReviewsItem {
    img: string;
    stars: number;
    review: string;
    name: string;
    startDate: string;
    endDate: string;
    comments: CommentsItem[];
};

const ReviewsData: ReviewsItem[] = [
    {
        img: PDTimg.src,
        stars: 4,
        review: "Desarrollador web full stack, enfocado a 2 sitios web de la empresa PDT Agencia, creando un CRM para la gestión de clientes, agencias, paquetes turisticos y hoteles.",
        name: "PDT Agencia",
        startDate: "Diciembre 20, 2023",
        endDate: "Septiembre 21, 2024",
        comments: [
            {
                img: PDTimg.src,
                review: "Creación de CRM para agencia de viajes",
                name: "PDT Agencia",
            },
            {
                img: PDTimg.src,
                review: "Desarrollo de gestión de clientes con cotización",
                name: "PDT Agencia",
            },
            {
                img: PDTimg.src,
                review: "Desarrollo de gestión de usuarios y roles",
                name: "PDT Agencia",
            },
            {
                img: PDTimg.src,
                review: "Desarrollo de gestión de agencias",
                name: "PDT Agencia",
            },
            {
                img: PDTimg.src,
                review: "Desarrollo de gestión de paquetes turísticos",
                name: "PDT Agencia",
            },
            {
                img: PDTimg.src,
                review: "Desarrollo de gestión de hoteles",
                name: "PDT Agencia",
            }
        ]
    },
];

export default ReviewsData;