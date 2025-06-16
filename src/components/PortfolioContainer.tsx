import PortfolioElement from "./PortfolioItem";
import { type PortfolioItemType } from "../hooks/useProjects";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PortfolioContainer = ({ onSelectedPortFolioItem, projects }: { onSelectedPortFolioItem: (item: PortfolioItemType) => void, projects: PortfolioItemType[] }) => {
    const {t} = useTranslation();
    const [selectedId, setSelectedId] = useState<number | null>(null);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((item) => (
                <PortfolioElement
                    key={item.id}
                    item={item}
                    onSelectedPortFolioItem={onSelectedPortFolioItem}
                    selected={selectedId === item.id}
                    onSelect={() => setSelectedId(item.id)}
                />
            ))}

            {
                projects.length === 0 && (
                    <div className="col-lg-12">
                        <h4 className=" text-center">{t("portfolio.projects.no-items")}</h4>
                    </div>
                )
            }

        </div>
    )
}

export default PortfolioContainer;