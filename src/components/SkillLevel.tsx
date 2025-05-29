import { useIncrementalCounter } from "../hooks/useIncrementalCounter";


const SkillLevel = ({ skill, level , experience="" }: { skill: string, level: number, experience?:string }) => {

    const progress = useIncrementalCounter(level)

    return (
        <div className="h-16">
            <span className="w-full flex justify-between font-raleway font-[600] uppercase text-xs mb-1.5 text-[var(--heading-color)]">
                <span>{skill}</span> <i className="not-italic">{experience}</i>
            </span>
            <div className="progress-bar-wrap overflow-clip h-2.5 bg-gray-200 w-full ">
                <div className={`bg-[var(--accent-color)] h-full`} style={{ width: `${progress}%` }} role="progressbar"></div>
            </div>
        </div>
    );
}
export default SkillLevel;


