import { useEffect, useState } from "react";
import { getAllProfessionalExperience, type ProfessionalExperience } from "../services/ProfessionalExperienceService";

export const useProfessionalExperience = () => {
  const [skillInfo, setSkillInfo] = useState<ProfessionalExperience[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
        const experience=await getAllProfessionalExperience()
        setSkillInfo(experience);
    }
    fetchData();
  }, []);

  return skillInfo || [];
};
