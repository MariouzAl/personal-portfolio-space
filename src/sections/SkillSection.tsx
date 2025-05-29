import SkillLevel from "../components/SkillLevel";
import { useSkillInfo } from "../hooks/useSkillInfo";
import type { SkillInfo } from "../services/AboutService";

const SkillSection = () => {
    const splitArrayInTwo = (array: any[]) => {
        const middleIndex = Math.ceil(array.length / 2); // Find the middle index
        const firstHalf = array.slice(0, middleIndex); // First half of the array
        const secondHalf = array.slice(middleIndex); // Second half of the array
        return [firstHalf, secondHalf];
    };
    
     const skills = useSkillInfo();
     const [firstSkillList,secondSkillList]:SkillInfo[][]=splitArrayInTwo(skills);
    return (
        <section id="skills" className="light-background bg-[var(--background-color)] text-[var(--text-color)] py-14">

            <div className="pb-16 relative px-3">
                <h2 className="emphasis-title">Skills</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="px-3" data-aos="fade-up" data-aos-delay="100">

                <div className="flex flex-col lg:flex-row  lg:space-x-20 ">

                    <div className="lg:flex-1/2">
                    {firstSkillList.map((skill) => (
                        <SkillLevel key={skill.getSkill()} level={skill.getLevel()} skill={skill.getSkill()} experience={skill.getExperienceLevel()}></SkillLevel>
                    ))}
                    </div>
                    <div className="lg:flex-1/2">
                    {secondSkillList.map((skill) => (
                        <SkillLevel key={skill.getSkill()} level={skill.getLevel()} skill={skill.getSkill()} experience={skill.getExperienceLevel()}></SkillLevel>
                    ))}
                    </div>

                </div>

            </div>

        </section>
    );
}
export default SkillSection;