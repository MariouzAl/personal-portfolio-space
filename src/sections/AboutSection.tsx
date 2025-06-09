import { forwardRef } from "react";
import useAboutInfo from "../hooks/useAboutInfo";



const AboutSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const person=useAboutInfo();
    return (
        <section ref={ref} id={props.id} className="text-color-[var(--default-color)] bg-[var(--background-color)] py-16 px-3 overflow-clip">
            <div className="pb-16 relative w-full" data-aos="fade-up">
                <h2 className="emphasis-title" >About</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="@container">

                <div className="flex flex-col items-center justify-center sm:flex-row ">
                    <div className="size-full lg:flex-1/3 sm:px-3">
                        <img src="/img/my-profile-img.jpeg" className="size-full" alt="" />
                    </div>
                    <div className="mt-5 lg:flex-2/3">
                        <h2 className="font-bold text-2xl font-raleway">Fullstack Developer.</h2>
                        <p className="py-3 italic font-roboto font-[400]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
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
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Degree:</strong> <span>{person?.getDegree()}</span></li>
                                    <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Email:</strong> <span>{person?.getEmail()}</span></li>
                                    {/* <li className="mb-5 flex items-center"><i className="bi bi-chevron-right text-base mr-1.5 text-[var(--accent-color)]"></i> <strong>Freelance:</strong> <span>{person?.getFreelance()}</span></li> */}
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                        </p>
                    </div> 
                </div>

            </div>

        </section>
    );
})

export default AboutSection;