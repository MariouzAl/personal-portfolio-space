import { withResumeItem } from "./ResumeItem";

const EducationItem = ({ timespan,
    institute,
    description }: {
        timespan: string,
        institute: string,
        description: string
    }) => {
    return (
        <>
            <h5>{timespan}</h5>
            <p className="mb-4"><em>{institute}</em></p>
            <p className="mb-4">{description}</p>
        </>
    )
}


const WrappedSumaryItem = withResumeItem(EducationItem);

export default WrappedSumaryItem;
