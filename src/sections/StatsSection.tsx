import { useTranslation } from "react-i18next";
import StatsItem from "../components/StatsItem";

const StatsSection = () => {
    const { t } = useTranslation();
    const stats = [
        { title: t("stats.happy_clients.title"), subtext: t("stats.happy_clients.subtext"), statsNumber: 8, iconClass: " bi-emoji-smile" },
        { title: t("stats.projects.title"), subtext: t("stats.projects.subtext"), statsNumber: 22, iconClass: " bi-journal-richtext" },
        { title: t("stats.hours_of_support.title"), subtext: t("stats.hours_of_support.subtext"), statsNumber: 1440, iconClass: " bi-headset" },
        { title: t("stats.hard_workers.title"), subtext: t("stats.hard_workers.subtext"), statsNumber: 4, iconClass: " bi-people" }
    ];


    return <section id="stats" className="@container bg-[var(--background-color)] text-color-[var(--default-color)] py-16 px-3">

        <div>

            <div className="flex flex-col sm:flex-row flex-wrap">

                {stats.map(({ title, subtext, statsNumber, iconClass }, index) => (
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