import PortfolioElement from "./PortfolioItem";
import { useProjects, type PortfolioItemType } from "../hooks/useProjects";
import { useState } from "react";

const PortfolioContainer = ({ category, onSelectedPortFolioItem }: { category: string, onSelectedPortFolioItem: (item: PortfolioItemType) => void }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const projects = useProjects(category)
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
                        <h4 className=" text-center">No items found</h4>
                    </div>
                )
            }

        </div>
    )
}

export default PortfolioContainer;