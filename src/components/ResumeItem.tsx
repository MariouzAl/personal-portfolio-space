import type { ComponentType, ReactNode } from "react";


const ResumeItem = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className="resume-item">
            <h4>{title}</h4>
            {children}
        </div>
    )

}


const withResumeItem = <P extends object>(Component: ComponentType<P>) => {
    return (props: P&{title:string}) => (
        <ResumeItem title={props.title}>
            <Component {...props} />
        </ResumeItem>
    );

}


export default ResumeItem;
export { withResumeItem };