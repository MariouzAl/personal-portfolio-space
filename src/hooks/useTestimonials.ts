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
];


export const useTestimonial = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsDTO);
  useEffect(() => {
    setTestimonials(testimonialsDTO)
  }, []);

  return testimonials;
};
