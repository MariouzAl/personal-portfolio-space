export type ProfessionalExperience = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

const ProfessionalExperienceData: ProfessionalExperience[] = [
  {
    id: 1,
    company: "3Pillar Global, Guadalajara,Jal",
    position: "Senior Software Engineer",
    startDate: "2020",
    endDate: "2024",
    description: "Software Engineer at 3PillaGlobal",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    technologies: ["React", "Node.js", "JavaScript",'Typescript', 'AWS', 'Azure', 'Docker'],
  },
  {
    id: 2,
    company: "Tiempo Development, Guadalajara,Jal",
    position: "Software Engineer III, IV",
    startDate: "2018",
    endDate: "2020",
    description: "Software Engineer at Tiempo Development",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Developed and maintained web applications using Angular and Node.js",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    technologies: ["React",'Angular', "Node.js", "JavaScript", 'AWS', 'Azure', 'Docker','Typescript'],
  },
  {
    id: 3,
    company: "INIDETAM, Anton Lizardo,Ver",
    position: "Software Engineer",
    startDate: "2016",
    endDate: "2018",
    description: "Software Engineer contractor at INIDETAM",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Developed and maintained web applications using Angular and Node.js",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    technologies: ['Angular', "Node.js", "JavaScript", 'PM2', 'Typescript', 'SocketIO', 'WorldWind'],
  },
  {
    id: 4,
    company: "Pizzap, Veracruz,Ver",
    position: "Software Engineer",
    startDate: "2016",
    endDate: "2016",
    description: "Software Engineer and lead Developer contractor at Pizzapp ",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Developed and maintained web applications using Angular and Node.js",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Leading the development of mobile apps and web apps",
      "Participated in code reviews and contributed to team knowledge sharing",
    ],
    technologies: ['Angular','Ionic', "JavaScript",'Typescript', "Firebase" , "Phonegap"],
  },
  {
    id: 5,
    company: "Ehecatl Software Services, Veracruz,Ver",
    position: "Frontend and Mobile Developer",
    startDate: "2015",
    endDate: "2016",
    description: "Frontend and Mobile Developer at Ehecatl",
    responsibilities: [
        "Worked with the Development of an Augmented Reality app for the Android Platform named Live In tour, using the metaio framework",
        "Development of a Wordpress theme template for “El Dictamen” newspaper."
    ],
    technologies: ['HTML','CSS', "JavaScript",'Typescript', "Android SDK" , "Java", "Ionic", "Phonegap" , 'Metaio SDK'],
  },
  {
    id: 6,
    company: "NEUS TEAM/Grupo CICE, Veracruz,Ver",
    position: "Frontend and Mobile Developer",
    startDate: "2015",
    endDate: "2016",
    description: "Frontend and Mobile Developer at Ehecatl",
    responsibilities: [
        "Developing mobile apps with Adobe Flex/Adobe Air consuming SOAP services built with Java",
        "Development of a mobile app for the Android platform using Android SDK with Java",
        "Development of a mobile app for the Android platform using Ionic and Cordova",
        "Leading the development of mobile apps",
        "Development SPA web app made with Angular"
    ],
    technologies: ['HTML','CSS', "JavaScript",'Typescript', "Android SDK" , "Java", "Ionic", "Phonegap", "Adobe Flex", "Adobe AIR" ],
  },
];

export const getAllProfessionalExperience = async (): Promise<
  ProfessionalExperience[]
> => {
  return ProfessionalExperienceData;
};
