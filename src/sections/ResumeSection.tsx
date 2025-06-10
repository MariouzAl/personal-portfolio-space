import { forwardRef } from "react";
import EducationItem from "../components/EducationItem";
import ProfessionalExperienceItem from "../components/ProfessionalExperienceItem";
import SumaryItem from "../components/SumaryItem";
import useAboutInfo from "../hooks/useAboutInfo";
import { useProfessionalExperience } from "../hooks/useProfessionalExperience";

const ResumeSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const persona = useAboutInfo();
    const professionalExperience = useProfessionalExperience();
    return (<section id={props.id} ref={ref} className="text-color-[var(--default-color)] bg-[var(--background-color)] py-16 px-3 overflow-clip">

        <div className="pb-6 mb-4 flex flex-col items-start">
            <h2 className="emphasis-title">Resume</h2>
            <p className="text-base">For a detailed overview of my professional trajectory and academic achievements, please refer to the comprehensive resume section below. This outlines my journey through key roles, significant projects, and educational milestones that have shaped my expertise.</p>
            <span className="self-end mt-2">
                <a
                    href="./files/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-700 transition-colors mt-4"
                >
                    <i className="bi bi-filetype-pdf text-lg"></i>
                    Download my resume
                </a>
            </span>
        </div>

        <div className="container">

            <div className="lg:flex lg:flex-row">

                <div className="lg:flex-1/2" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Sumary</h3>
                    {persona && <SumaryItem
                        title={persona.getName()}
                        description={persona.getDescription()}
                        email={persona.getEmail()}
                        telephone={persona.getPhone()}
                        jobAddress={persona.getCity()}
                    ></SumaryItem>
                    }


                    <h3 className="resume-title">Education</h3>
                    <EducationItem
                        title="Bachelor of engineering in computer engineering"
                        timespan="2005 - 2009"
                        institute="Instituto Tecnologico de Veracruz, Veracruz, Mexico"
                        description="My academic journey at the Veracruz Institute of Technology (2005-2009) was marked by outstanding performance, graduating with an average of 97.3. Beyond the classroom, my commitment extended to active leadership, serving as Vice President in prestigious technical chapters like IEEE and ACM. This experience culminated in the co-organization of the International Congress on Information Technologies and Robotics (CITIR 2009), an event that solidified my skills in large-scale project management and collaboration."
                    ></EducationItem>

                </div>

                <div className="lg:flex-1/2" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="resume-title">Professional Experience</h3>
                    {professionalExperience.map((experience) => (
                        <ProfessionalExperienceItem
                            key={experience.id}
                            title={experience.position}
                            timespan={`${experience.startDate} - ${experience.endDate}`}
                            company={experience.company}
                            responsibilities={experience.responsibilities}
                        ></ProfessionalExperienceItem>
                    ))}


                </div>

            </div>

        </div>

    </section>)

})

export default ResumeSection;