import { useEffect, useState } from "react";
import { AboutService, SkillInfo } from "../services/AboutService";


export const useSkillInfo = () => {
    {
        const [skillInfo , setSkillInfo] = useState<SkillInfo[] | null>(null);
        useEffect(() => {
            const user = new AboutService();
            const skills=user.getSkills()
            setSkillInfo(skills);
        },[]);
        if (!skillInfo) {
            return [];
        }
        return skillInfo;
    }
    }