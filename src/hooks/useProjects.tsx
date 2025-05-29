import { useState, useEffect } from "react";

const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "lorem ipsum",
        description: "App",
        link: "assets/img/portfolio/app1.jpg",
        category: "Apps"
    },
    {
        id: 2,
        title: "App 2",
        description: "App",
        image: "src/assets/img/portfolio_thumbnail.png",
        link: "assets/img/portfolio/app1.jpg",
        category: "Projects"
    },
    {
        id: 3,
        title: "Project 1",
        description: "Project",
        
        link: "assets/img/portfolio/app1.jpg",
        category: "Projects"
    },
    {
        id: 4,
        title: "Branding 1",
        description: "Branding",
        
        link: "assets/img/portfolio/app1.jpg",
        category: "Branding"
    },
];
export const useProjects = (category: string) => {
    const [projects, setProjects] = useState(PORTFOLIO_DATA);
    useEffect(() => {
        const filteredProjects = PORTFOLIO_DATA.filter((item) => category === "All" || item.category === category);
        setProjects(filteredProjects);
    }, [category]);
    return projects;
};
