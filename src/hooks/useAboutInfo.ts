import { useEffect, useState } from "react";
import { AboutService, Person } from "../services/AboutService";



const useAboutInfo = () => {
    const [aboutInfo , setAboutInfo] = useState<Person | null>(null);
    useEffect(() => {
        const user = new AboutService();
        const person=user.getPerson()
        setAboutInfo(person);
    },[]);
    if (!aboutInfo) {
        return null;
    }
    return aboutInfo;
}
export default useAboutInfo;