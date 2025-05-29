import StatsItem from "../components/StatsItem";

const StatsSection = () => {
    const stats = [
        { title: "Happy Clients", subtext: "consequuntur quae", statsNumber: 232, iconClass: " bi-emoji-smile" },
        { title: "Projects", subtext: "adipisci atque cum quia aut", statsNumber: 521, iconClass: " bi-journal-richtext" },
        { title: "Hours Of Support", subtext: "aut commodi quaerat", statsNumber: 1453, iconClass: " bi-headset" },
        { title: "Hard Workers", subtext: "rerum asperiores dolor", statsNumber: 32, iconClass: " bi-people" }]


    return <section id="stats" className="@container bg-[var(--background-color)] text-color-[var(--default-color)] py-16 px-3">

        <div data-aos="fade-up" data-aos-delay="100">

            <div className="flex flex-col sm:flex-row flex-wrap">

                {stats.map(({title,subtext,statsNumber,iconClass}, index) => (
                    <StatsItem 
                    key={index}
                    iconClass={iconClass} 
                    statsNumber={statsNumber}
                    subtext={subtext}
                    title={title} ></StatsItem>
                ))}

            </div>

        </div>

    </section>

}

export default StatsSection;