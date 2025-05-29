
export type ServiceIcons = "briefcase" | 'card-checklist' | 'bar-chart' | 'binoculars' | 'brightness-high' | 'calendar4-week'
export type ServiceType = {
    title:string, 
    description:string
}
const ServiceItem = ({icon='bar-chart', service={description:"",title:""}}:{icon:ServiceIcons, service:ServiceType}) => {

    return (
        <div className="flex sm:flex-1/3 md:flex-1/4  " data-aos="fade-up" data-aos-delay="100">
            <div className=" group bg-[var(--accent-color)] hover:bg-[var(--surface-color)]  flex items-center justify-center w-[54px] h-[54px] rounded-full mr-5 border-solid border-[1px] border-[var(--accent-color)] shrink-0">
                <i className={`bi bi-${icon} text-white group-hover:text-[var(--accent-color)] text-2xl`}></i></div>
            <div>
                <h4 className="font-bold mb-4 text-lg capitalize font-raleway text-[var(--heading-color)] hover:text-[var(--accent-color)]"><a href="service-details.html" className="stretched-link">{service.title}</a></h4>
                <p className="leading-6 text-sm mb-4 mt-0">{service.description}</p>
            </div>
        </div>

    )

}


export default ServiceItem