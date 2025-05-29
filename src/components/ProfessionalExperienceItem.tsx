import { withResumeItem } from "./ResumeItem";


const ProfessionalExperienceItem = ({  timespan, company, responsibilities }: { timespan: string, company: string, responsibilities: string[] }) => {
    return (
        <>
            <h5>{timespan}</h5>
            <p className="mb-4 font-roboto"><em>{company}</em></p>
            { responsibilities && responsibilities.length > 0 && <ul className="pl-5">
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-4 list-disc ">
                        {responsibility}
                    </li>
                ))}
            </ul>}
        </>
    )
}

const WrappedProfessionalExperienceItem = withResumeItem(ProfessionalExperienceItem);
export default WrappedProfessionalExperienceItem;