import { forwardRef } from "react";
import EducationItem from "../components/EducationItem";
import ProfessionalExperienceItem from "../components/ProfessionalExperienceItem";
import SumaryItem from "../components/SumaryItem";
import useAboutInfo from "../hooks/useAboutInfo";
import { useProfessionalExperience } from "../hooks/useProfessionalExperience";
import { useTranslation } from "react-i18next";

const ResumeSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const persona = useAboutInfo();
    const professionalExperience = useProfessionalExperience();
    const { t } = useTranslation()
    return (<section id={props.id} ref={ref} className="text-color-[var(--default-color)] bg-[var(--background-color)] py-16 px-3 overflow-clip">

        <div className="pb-6 mb-4 flex flex-col items-start">
            <h2 className="emphasis-title">{t('resume.title')}</h2>
            <p className="text-base">{t('resume.description')}</p>
            <span className="self-end mt-2">
                <a
                    href="./files/Mario_Rivera_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-700 transition-colors mt-4"
                >
                    <i className="bi bi-filetype-pdf text-lg"></i>
                    {t("resume.download_resume")}
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
                        title={t('education.title')}
                        timespan="2005 - 2009"
                        institute="Instituto Tecnologico de Veracruz, Veracruz, Mexico"
                        description={t('education.description')}
                    ></EducationItem>

                </div>

                <div className="lg:flex-1/2" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="resume-title">{t('professional_experience.title')}</h3>
                    {professionalExperience.map((experience) => (
                        <ProfessionalExperienceItem
                            key={experience.key}
                           title={t(`professional_experience.${experience.key}.position` as any)}
                            timespan={`${experience.startDate} - ${experience.endDate}`}
                            company={experience.company}
                            responsibilities={t(`professional_experience.${experience.key}.responsibilities` as any, { returnObjects: true })}
                        ></ProfessionalExperienceItem>
                    ))}


                </div>

            </div>

        </div>

    </section>)

})

export default ResumeSection;