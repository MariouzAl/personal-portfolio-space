import { useState, useEffect } from "react";

export type PortfolioItemType = {
    id: number;
    project: string;
    shortDescription: string;
    link: string;
    projectLink?: string; // Optional property for backward compatibility
    category: string[];
    companyName?: string; // Optional property for backward compatibility
    cover?: string; // Optional property for backward compatibility
    builtWith?: string[]; // Optional property for backward compatibility
    images?: string[]; // Optional property for backward compatibility
}

const PORTFOLIO_DATA: PortfolioItemType[] = [
    {
        id: 1,
        project: "Mobile app : Despacho de combustible",
        shortDescription: "Aplicación para  dispositivos móviles (Android), en la plataforma Adobe AIR, para realizar  el registro de los despachos de combustibles .",
        link: "/img/portfolio/app1.jpg",
        category: ["Apps"],
        companyName: "Grupo CICE",
        cover: "./projects/combustibles/cover.png",
        images: [
            "./projects/combustibles/cover.png",
            "./projects/combustibles/1.png",
            "./projects/combustibles/2.png",
            "./projects/combustibles/3.png",
            "./projects/combustibles/5.png",
        ],
        builtWith: ["Adobe AIR", "Adobe Flex", "ActionScript 3.0", "Adobe Illustrator", "Adobe InDesign"],
    },
    {
        id: 2,
        companyName: "Grupo CICE",
        project: "Aplicación de Tarjado de Buques para Dispositivos Móviles",
        shortDescription: "La Aplicación de Tarjado de Buques fue diseñada para remplazar al sistema antiguo de Tarjado utilizado en GRUPO CICE.",
        cover: "./projects/tarjado/cover.png",
        link: "/portfolio/app1.jpg",
        category: ["Apps"],
        images: [
            "./projects/tarjado/cover.png",
            "./projects/tarjado/1.png",
            "./projects/tarjado/2.png",

        ],
        builtWith: ["Adobe AIR", "Adobe Flex", "ActionScript 3.0", "Adobe Illustrator", "Adobe InDesign", "Robotlegs"],
    },
    {
        id: 3,
        project: "Resumen de operaciones para dispositivos móviles",
        companyName: "Grupo CICE",
        shortDescription: "La Aplicación de Resumen de Operaciones ha sido diseñada con la finalidad de ofrecer un servicio instantáneo de reportes de operaciones de forma segura y eficiente.",
        builtWith: ["Android SDK", "Java", "Eclipse IDE"],
        cover: "./projects/resumen_op/cover.png",
        images: [
            "./projects/resumen_op/cover.png",
            "./projects/resumen_op/1.png",
            "./projects/resumen_op/2.png",

        ],
        link: "/img/portfolio/app1.jpg",
        category: ["Apps"]
    },
    {
        id: 4,
        project: "Aplicacion de Tarjado de reconocimiento de aduanero",
        companyName: "Grupo CICE",
        shortDescription: "La Aplicación Tarjado de Reconocimiento Aduanero cumple con el objetivo de poder levantar los pedimentos de servicios de Reconocimiento Aduanero y registrar la ejecución de dichos servicios.",
        link: "/img/portfolio/app1.jpg",
        category: ["Apps"],
        builtWith: ["Android SDK", "Java", "Eclipse IDE", "Glassfish", "Java EE", "Oracle Database", 'Store Procedures'],
        cover: "./projects/rec_aduanero/cover.png",
        images: [
            "./projects/rec_aduanero/cover.png",
            "./projects/rec_aduanero/1.png",
            "./projects/rec_aduanero/2.png",
            "./projects/rec_aduanero/3.png",
            "./projects/rec_aduanero/4.png",

        ],

    },
    {
        id: 5,
        project: "App Móvil Aprobación de Documentos",
        companyName: "CICE",
        shortDescription: "La Aplicación móvil de Aprobación de Documentos fue diseñada para facilitar la aprobación de documentos desde dispositivos móviles",
        link: "/img/portfolio/app1.jpg",
        category: ["Apps"],
        cover: "./projects/appdoc/cover.png",
        images: [
            "./projects/appdoc/cover.png",
            "./projects/appdoc/1.png",
            "./projects/appdoc/2.png",
            "./projects/appdoc/3.png",
            "./projects/appdoc/4.png",
            "./projects/appdoc/5.png",

        ],
        builtWith: ["Ionic", "Javascript", "AngularJS", "Cordova", "HTML5", "CSS3"],
    },
    {
        id: 6,
        companyName: "CICE",
        project: "App Web de Aprobación de Contenedores",
        shortDescription: "La Aplicación móvil de Aprobación de Contenedores fue diseñada para facilitar la aprobación de contenedores desde dispositivos móviles",
        link: "/img/portfolio/app1.jpg",
        cover: "./projects/appcontenedores/cover.png",
        category: ["Apps", "Web"],
        images: [
            "./projects/appcontenedores/cover.png",
            "./projects/appcontenedores/1.png",
            "./projects/appcontenedores/2.png",
            "./projects/appcontenedores/3.png",
            "./projects/appcontenedores/4.png",
            "./projects/appcontenedores/6.png",

        ],
        builtWith: ["Javascript", "AngularJS", "Angular Material", "Cordova", "HTML5", "CSS3", "Adobe Illustrator"],
    },
    {
        id: 7,
        companyName: "Ehecatl",
        project: "Live In Tour (Android)",
        shortDescription: "La aplicación LiveIntour hace uso del Sdk de android y del SDK Metaio para lograr la funcionalidad de Realidad Aumentada y geolocalizacion en dispositivos móviles",
        link: "/img/portfolio/app1.jpg",
        cover: "./projects/liveintour/cover.png",
        category: ["Apps"],
        builtWith: ["Android SDK", "Java", "Android Studio", "Meta IO SDK"],
    },
    {
        id: 8,
        companyName: "Ehecatl",
        project: "Echocalc (Android)",
        shortDescription: "Implementar una aplicación de Calculadora para diferentes operaciones de salud. Utilizando un código base implementado en HTML",
        link: "/img/portfolio/app1.jpg",
        cover: "./projects/echocalc/cover.png",
        category: ["Apps"],
        builtWith: ["Android SDK", "HTML", "CSS", "JS"],
    },
    {
        id: 9,
        companyName: "Ehecatl",
        project: "Hectorizate (Android)",
        shortDescription: " Aplicacion con Realidad Aumentada para figura pública.",
        link: "/img/portfolio/app1.jpg",
        cover: "./projects/hectorizate/cover.png",
        category: ["Apps"],
        builtWith: ["Android SDK", "Metaio SDK", "Volley library", "Parse", "Java"],
    },
    {
        id: 10,
        companyName: "Ehecatl",
        project: "Portal de El Dictamen (Web)",
        shortDescription: "Renovacion del estilo del sitio web El Dictamen",
        link: "/img/portfolio/app1.jpg",
        cover: "./projects/dictamen/cover.png",
        category: ["Projects", "Web"],
        builtWith: ["Wordpress", "PHP", "HTML", "JS", "CSS"],
    },
    {
        id: 11,
        companyName: "INIDETAM",
        project: "CESISCCAM",
        shortDescription: "Conjunto de sistemas de simulación y sistemas de apoyo a la simulación, que permitiren al personal naval entrenarse en dos áreas principales, Entrenamiento de Operación y Entrenamiento de Mantenimiento, de los sistemas de Mando y Control de la SEMAR.",
        link: "https://www.semar.gob.mx/INIDETAM/proyectos.html#carousel-cesisccam",
        cover: "./projects/cesisccam/2.png",
        images: [
            "./projects/cesisccam/cover.png",
            "./projects/cesisccam/1.jpg",
            "./projects/cesisccam/2.png"],
        category: ["Projects", "Web", 'Backend'],
        builtWith: ['Nodejs', "Express", "MongoDB", "PostgresSQL", "HTML", "JS", "CSS", "Angular", "SocketIO", "Typescript", "Scrum", 'Kanban'],
    },
    {
        id: 12,
        companyName: "Tiempo Development",
        project: "Cbt Nuggets (Web)",
        shortDescription: "Online IT training platform offering a vast library of concise and engaging video courses led by expert instructors. It focuses on practical skills and certifications across various IT domains.",
        link: "https://www.cbtnuggets.com/",
        cover: "./projects/cbt/cover.png",
        category: ["Projects", "Web", 'Backend'],
        builtWith: ['Nodejs', "Express", 'AWS SDK', "DynamoDB" , "Microservices", "REST API", "Typescript", "Scrum", 'Kanban'],
    },
    {
        id: 13,
        companyName: "Tiempo Development",
        project: "Amps",
        shortDescription: "Healthcare cost reduction for self-funded organizations.",
        link: "https://www.amps.com/",
        cover: "./projects/amps/cover.png",
        category: ["Projects", "Web", 'Backend'],
        builtWith: ['Nodejs', "Express", 'AWS SDK', "Microservices", "REST API", "React", "Typescript", "Scrum", 'Kanban', 'NestJS', 'TypeOrm', 'Postman'],
    },
    {
        id: 14,
        companyName: "3Pillar Global",
        project: "Nielsen",
        shortDescription: "Platform for providing market research, data  analytics and insights to retailers and consumer packaged goods.",
        link: "#",
        category: ["Projects", "Web", 'Backend'],
        builtWith: ['Nodejs', "Microservices", "REST API", "Angular", "Typescript", "Scrum", 'Kanban', 'Storybook', 'Figma', 'Postman'],
    },
    {
        id: 15,
        companyName: "3Pillar Global",
        project: "Centene",
        shortDescription: "Platform for providing market research, data  analytics and insights to retailers and consumer packaged goods.",
        link: "#",
        category: ["Projects", "Web", 'Backend'],
        builtWith: ['Nodejs', "Microservices", "REST API", "Angular", "Typescript", "Scrum", 'Kanban', 'Storybook', 'Figma', 'Postman'],
    },


];
export const useProjects = (category: string) => {
    const [projects, setProjects] = useState(PORTFOLIO_DATA);
    useEffect(() => {
        const filteredProjects = PORTFOLIO_DATA.filter((item) => category === "All" || item.category.includes(category));
        setProjects(filteredProjects);
    }, [category]);
    return projects;
};
