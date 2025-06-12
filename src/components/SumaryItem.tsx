import { useTranslation } from "react-i18next";
import  { withResumeItem } from "./ResumeItem";

const SumaryItem = ({jobAddress, telephone, email}:{description:string, jobAddress :string, telephone:string , email:string}) => {
    const {t}=useTranslation();
    return (<>
        <p className="mb-4"><em>{t("about.description")}</em></p>
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