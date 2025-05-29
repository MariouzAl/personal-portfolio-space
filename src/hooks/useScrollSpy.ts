import { useEffect, useRef, useState } from "react";

const useScrollSpy = (onSectionChange:(section:string)=>void) => {
  const [activeSection, setActiveSection] = useState<string>(""); // Track the active section
const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({}); // Store refs for each section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update the active section
            onSectionChange(entry.target.id); // Call the callback with the active section
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px 0px -100% 0px", // Trigger when the top of the element reaches the top of the viewport
        threshold: 0,
      } // Trigger when 50% of the section is visible
    );

    // Observe each section
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Cleanup observer
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);


  return {activeSection,sectionRefs};
};


export default useScrollSpy;