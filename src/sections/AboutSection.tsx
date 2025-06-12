import { forwardRef } from "react";
import useAboutInfo from "../hooks/useAboutInfo";
import { Link } from "react-router"; // o "react-router" según tu versión
import { useTranslation } from "react-i18next";




const AboutSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const { t } = useTranslation();
    const person = useAboutInfo();
    return (
        <section ref={ref} id={props.id} className="text-color-[var(--default-color)] bg-[var(--background-color)] py-16 px-3 overflow-clip">
            <div className="pb-16 relative w-full" data-aos="fade-up">
                <h2 className="emphasis-title" >{t('nav_menu.about')}</h2>
                <p>{t('about.description')}</p>
            </div>

            <div className="@container">

                <div className="flex flex-col items-center justify-center lg:flex-row ">
                    <div className="size-full lg:flex-1/3 sm:px-3">
                        <img src="./img/my-profile-img.jpeg" className="size-full" alt="" />
                    </div>
                    <div className="mt-5 lg:flex-2/3">
                        <h2 className="font-bold text-2xl font-raleway">{t("about.subtitle")}</h2>
                        <p className="py-3 italic font-roboto font-[400]">
                            {t("about.description2")}
                        </p>
                        <p className="py-3 italic font-roboto font-[400]">{t("about.heres_some_facts")}</p>
                        <div className="flex flex-col  lg:flex-row ">
                            <div className="lg:flex-1/2">
                                <ul>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Birthday:</strong> <span>{person?.getBirthday()}</span></li>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Phone:</strong> <span>{person?.getPhone()}</span></li>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>City:</strong> <span>{person?.getCity()}</span></li>
                                </ul>
                            </div>
                            <div className="lg:flex-1/2">
                                <ul>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Age:</strong> <span>{person?.getAge()}</span></li>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Degree:</strong> <span>{t("engineer")}</span></li>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Email:</strong> <span>{person?.getEmail()}</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            {t("about.description3")}
                        </p>
                        <Link to="#" className="hover:text-cyan-700 text-cyan-500 font-bold">{t("readMore")}</Link>

                    </div>
                </div>

            </div>

        </section>
    );
})

export default AboutSection;