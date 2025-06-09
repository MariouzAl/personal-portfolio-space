import { useState, useEffect } from "react";

const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "lorem ipsum",
        description: "App",
        link: "/img/portfolio/app1.jpg",
        category: "Apps"
    },
    {
        id: 2,
        title: "App 2",
        description: "App",
        image: "/img/portfolio_thumbnail.png",
        link: "/portfolio/app1.jpg",
        category: "Projects"
    },
    {
        id: 3,
        title: "Project 1",
        description: "Project",
        
        link: "/img/portfolio/app1.jpg",
        category: "Projects"
    },
    {
        id: 4,
        title: "Branding 1",
        description: "Branding",
        
        link: "/img/portfolio/app1.jpg",
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
