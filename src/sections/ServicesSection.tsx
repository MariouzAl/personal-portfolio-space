import { forwardRef } from "react"
import ServiceItem, { type ServiceIcons, type ServiceType } from "../components/ServiceItem"

const services: (ServiceType & { icon: ServiceIcons })[] = [
    {
        icon: "briefcase", description: "Custom web solution development, covering both the user interface (Frontend with React/Vite) and server-side logic (Backend with RESTful APIs and databases). Ideal for projects requiring robust end-to-end functionality.", title: "Fullstack Development"
    },
    {
        icon: "card-checklist", description: "Designing and building interactive, responsive, and optimized user interfaces, leveraging the latest versions of React and the robust type safety of TypeScript. Focused on exceptional user experience (UX) and visual performance.", title: "Specialized Frontend Development (React & TypeScript)"
    },
    {
        icon: "bar-chart", description: "Developing server-side logic to power web applications, including the creation of secure and efficient RESTful APIs, along with the integration and management of various databases.", title: "Backend API Design & Implementation"
    },
    {
        icon: "binoculars", description: "Providing updates and ongoing support for existing web applications, including migrating to newer technologies, code refactoring, and bug resolution to ensure optimal performance and long-term scalability.", title: "Web Application Maintenance & Modernization"
    },
    {
        icon: "brightness-high", description: "Expert guidance on web development best practices, technology selection, software architecture design, and implementation strategies for web projects, helping to lay solid foundations from the outset.", title: "Web Technical Consulting & Architecture"
    },
    {
        icon: "calendar4-week", description: "Connecting your application with diverse external platforms and services (e.g., payment gateways, social media APIs, mapping services, analytics tools) to extend its functionality and automate processes, ensuring seamless and secure communication.", title: "Third-Party API & External Service Integration"
    },
]

const ServicesSection = forwardRef<HTMLElement, { id: string }>(({ id }) => {
    return (
        <section className="text-[var(--default-color)] bg-[var(--background-color)] py-14 px-0 overflow-clip" id={id}>
            <div className="w-full max-w-[540px] px-[calc(var(--bs-gutter-x)*.5)] ml-auto mr-auto pb-[60px] md:max-w-[1320px]  ">
                <h2 className="emphasis-title">Services</h2>
                <p>Focused on transforming ideas into robust digital solutions, I offer a range of web development services designed to meet the specific needs of your project. My expertise spans from conceptualization to deployment, ensuring efficient and high-quality results.</p>
            </div>

            <div className="w-full max-w-[540px] md:max-w-full ml-auto mr-auto px-[calc(var(--bs-gutter-x)*.5)]">

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5">
                    {services.map(service => {
                        return <ServiceItem icon={service.icon} service={service}></ServiceItem>

                    })}

                </div>

            </div>

        </section>
    )

})


export default ServicesSection