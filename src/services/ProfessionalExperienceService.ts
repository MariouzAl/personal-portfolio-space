
export type ProfessionalExperience = {
  id: number;
  company: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  key: ProfessionalExperienceKeys; // Optional key for React rendering
};

type ProfessionalExperienceKeys = '3pg-senior-software-engineer' | 'tiempo-development-software-engineer' | 'inidetam' | 'pizzap' | 'ehecatl-software-services' | 'neus-team-grupo-cice';


const ProfessionalExperienceData: ProfessionalExperience[] = [
  {
    id: 1,
    key: "3pg-senior-software-engineer",
    company: "3Pillar Global, Guadalajara,Jal",
    startDate: "2020",
    endDate: "2024",
    technologies: ["React", "Node.js", "JavaScript",'Typescript', 'AWS', 'Azure', 'Docker'],
  },
  {
    id: 2,
    key: "tiempo-development-software-engineer",
    company: "Tiempo Development, Guadalajara,Jal",
    startDate: "2018",
    endDate: "2020",
    technologies: ["React",'Angular', "Node.js", "JavaScript", 'AWS', 'Azure', 'Docker','Typescript'],
  },
  {
    id: 3,
    key: "inidetam",
    company: "INIDETAM, Anton Lizardo,Ver",
    startDate: "2016",
    endDate: "2018",
    technologies: ['Angular', "Node.js", "JavaScript", 'PM2', 'Typescript', 'SocketIO', 'WorldWind'],
  },
  {
    id: 4,
    key: "pizzap",
    company: "Pizzap, Veracruz,Ver",
    startDate: "2016",
    endDate: "2016",
    technologies: ['Angular','Ionic', "JavaScript",'Typescript', "Firebase" , "Phonegap"],
  },
  {
    id: 5,
    key: "ehecatl-software-services",
    company: "Ehecatl Software Services, Veracruz,Ver",
    startDate: "2015",
    endDate: "2016",
    technologies: ['HTML','CSS', "JavaScript",'Typescript', "Android SDK" , "Java", "Ionic", "Phonegap" , 'Metaio SDK'],
  },
    {
    id: 6,
    key: "neus-team-grupo-cice",
    company: "NEUS TEAM/Grupo CICE, Veracruz,Ver",
    startDate: "2015",
    endDate: "2016",
    technologies: ['HTML','CSS', "JavaScript",'Typescript', "Android SDK" , "Java", "Ionic", "Phonegap", "Adobe Flex", "Adobe AIR" ],
  },
];

export const getAllProfessionalExperience = async (): Promise<
  ProfessionalExperience[]
> => {
  return ProfessionalExperienceData;
};
