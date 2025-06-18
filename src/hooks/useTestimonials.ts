import { useEffect, useState } from "react";

export type Testimonial = {
  id: number;
  key: string;
  who: string;
  comment: string;
  position: string;
  image?:string
};

const testimonialsDTO: Testimonial[] = [
    {
      id: 4,
      key: "edwin-sandoval",
      who: "Edwin Sandoval",
      image:"./testimonial/edwin.png",
      position: "Technical Lead Frontend Developer at 3Pillar Global",
      comment: "Mario es un excelente profesional que en momentos donde los proyectos se llegan complicar, es donde mejor se desempeña, aportando talento, disciplina, responsabilidad, liderazgo y trabajo en equipo, es un as bajo la manga para cualquier organización.",
    },
    {
      id: 6,
      key: "ronmell-fuentes",
      who: "Ronmell Fuentes",
      image:"./testimonial/ronmell.png",
      position: "Sr. Software Engineer",
      comment: "I've had the great opportunity to work in the same team with Mario; anyone can see how skillful Mario is by the very first session, Mario truly resembles the spirit for delivering the optimal value to the customer in each task. I am grateful that I could collide with such a great professional. I undoubtedly recommend Mario as a crucial team member, how could I not.",
    },
  {
    id: 1,
    image:"./testimonial/yami.png",
    key: "yami-salazar",
    who: "Yami Salazar",
    position: "Salesforce Certified Developer",
    comment: "Mario es una persona con alto sentido de la responsabilidad, comprometido con cada proyecto al que se le integre. Cuenta con una excelente habilidad para trabajar en equipo y bajo presión, capaz de tomar el rol de líder si la situación lo requiere.",
  },
   {
    id: 2,
    key: "napoleon-velasco-carrillo",
    who: "Napoleón Velasco Carrillo",
    image:"./testimonial/napoleon.png",
    position: "Maintenance and Facility Manager",
    comment: "Excelente trabajador, responsable, honesto y eficiente. Como persona es tranquilo, confiable y un muy buen amigo. Enseña y explica lo que sabe cuando es necesario, ayuda a resolver problemas y es muy buen coordinador.",
  },
  {
    id: 3,
    key: "rodrigo-rosas-zamudio",
    who: "Rodrigo Rosas Zamudio",
    image:"./testimonial/rod.png",
    position: "Certified Salesforce Administrator & Fullstack JS ",
    comment: "Mario Alberto es una persona responsable, que sabe trabajar bajo presión y da lo mejor de sí para completar cualquier trabajo.",
  },
  {
    id: 5,
    key: "carmelino-zea",
    who: "Mtro. Carmelino Zea Constantino",
    image:"./testimonial/carmelino.png",
    position: 'Profesor Titular "C" de Tiempo Completo, Facultad de Ingeniería, UNAM',
    comment: "Recomiendo a Mario Rivera Domínguez porque en los trabajos de colaboración en que le he pedido que nos ayude siempre lo ha hecho con gran calidad y dinamismo; posee cualidades que lo hacen una persona de gran valor, comprometido con el sentido de responsabilidad, y habilidades para trabajar en equipo",
  },
];


export const useTestimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsDTO);
  useEffect(() => {
    setTestimonials(testimonialsDTO)
  }, []);

  return testimonials;
};
