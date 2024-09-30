interface ArticlesSections {
    id: number;
    title: string;
    scroll: number;
    price: string;
};

const articlesSections: ArticlesSections[] = [
    {
        id: 1,
        title: 'Sobre mi',
        scroll: 0,
        price: "259.00",
    },
    {
        id: 2,
        title: 'Habilidades',
        scroll: 690,
        price: "309.00",
    },
    {
        id: 3,
        title: 'Experiencia',
        scroll: window.innerHeight >= 1024 ? 1900 : 1380,
        price: "19.00",
    },
    {
        id: 4,
        title: 'Proyectos',
        scroll: window.innerHeight < 800 ? 1900 : 2400,
        price: "245.00",
    },
    {
        id: 5,
        title: 'Contacto',
        scroll: 20000,
        price: "4.00",
    }
];

export default articlesSections;