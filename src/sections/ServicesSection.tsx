import { forwardRef } from "react"
import ServiceItem, { type ServiceIcons, type ServiceType } from "../components/ServiceItem"
import { useTranslation } from "react-i18next"


const ServicesSection = forwardRef<HTMLElement, { id: string }>(({ id }) => {
    const { t } = useTranslation()

    const services: (ServiceType & { icon: ServiceIcons })[] = [
        {
            icon: "briefcase", description: t('services.fullstack_development.description'), title: t('services.fullstack_development.title')
        },
        {
            icon: "card-checklist", description: t('services.specialized_frontend_development.description'), title: t('services.specialized_frontend_development.title')
        },
        {
            icon: "bar-chart", description: t('services.backend_api_design_and_implementation.description'), title: t('services.backend_api_design_and_implementation.title')
        },
        {
            icon: "binoculars", description: t('services.web_application_maintenance_and_modernization.description'), title: t('services.web_application_maintenance_and_modernization.title')
        },
        {
            icon: "brightness-high", description: t('services.web_technical_consulting_and_architecture.description'), title: t('services.web_technical_consulting_and_architecture.title')
        },
        {
            icon: "calendar4-week", description: t('services.third_party_api_and_external_service_integration.description'), title: t('services.third_party_api_and_external_service_integration.title')
        },
    ]
    return (
        <section className="text-[var(--default-color)] bg-[var(--background-color)] py-14 px-0 overflow-clip" id={id}>
            <div className="w-full max-w-[540px] px-[calc(var(--bs-gutter-x)*.5)] ml-auto mr-auto pb-[60px] md:max-w-[1320px]  ">
                <h2 className="emphasis-title">{t('services.title')}</h2>
                <p>{t('services.description')}</p>
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