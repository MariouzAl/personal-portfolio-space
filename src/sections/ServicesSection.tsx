import { forwardRef } from "react"
import ServiceItem, { type ServiceIcons, type ServiceType } from "../components/ServiceItem"

const services: (ServiceType & { icon: ServiceIcons })[] = [
    {
        icon: "briefcase", description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident", title: "Lorem Ipsum"
    },
    {
        icon: "card-checklist", description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata", title: "Dolor Sitema"
    },
    {
        icon: "bar-chart", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", title: "Sed ut perspiciatis"
    },
    {
        icon: "binoculars", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", title: "Magni Dolores"
    },
    {
        icon: "brightness-high", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque", title: "Nemo Enim"
    },
    {
        icon: "calendar4-week", description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi", title: "Eiusmod Tempor"
    },
]

const ServicesSection = forwardRef<HTMLElement, { id: string }>(({ id }) => {
    return (
        <section className="text-[var(--default-color)] bg-[var(--background-color)] py-14 px-0 overflow-clip" id={id}>
            <div className="w-full max-w-[540px] px-[calc(var(--bs-gutter-x)*.5)] ml-auto mr-auto pb-[60px] md:max-w-[1320px]  ">
                <h2 className="emphasis-title">Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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