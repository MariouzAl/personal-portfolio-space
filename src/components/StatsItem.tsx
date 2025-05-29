import { useIncrementalCounter } from "../hooks/useIncrementalCounter";

const StatsItem = (props: { title: string; subtext: string, statsNumber: number, iconClass: string }) => {
    const displayNumber=useIncrementalCounter(props.statsNumber)
    return <div className="px-3 flex-full sm:flex-1/2 lg:flex-1/4">
        <div className="p-8">
            <i className={`float-left block text-[44px] text-[var(--accent-color)] bi ${props.iconClass}`} ></i>
            <span  className="text-[var(--heading-color)] text-5xl font-bold ml-[60px] block">{displayNumber}</span>
            <p className="pt-4 ml-16 font-raleway text-sm text-gray-500"><strong>{props.title}</strong> <span>{props.subtext}</span></p>
        </div>
    </div>
}


export default StatsItem;