import  { withResumeItem } from "./ResumeItem";

const SumaryItem = ({description ,jobAddress, telephone, email}:{description:string, jobAddress :string, telephone:string , email:string}) => {
    return (<>
        <p className="mb-4"><em>{description}</em></p>
        <ul className="pl-5 list-disc">
            <li className="pb-2">{jobAddress}</li>
            <li className="pb-2">{telephone}</li>
            <li className="pb-2">{email}</li>
        </ul>
    </>
    )
}

const WrappedSumaryItem = withResumeItem(SumaryItem);

export default WrappedSumaryItem;