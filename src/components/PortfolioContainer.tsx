import PortfolioElement, { type PortfolioItemType } from "./PortfolioItem";
import { useProjects } from "../hooks/useProjects";

const PortfolioContainer = ({ category ,onSelectedPortFolioItem}: { category: string , onSelectedPortFolioItem:(item:PortfolioItemType)=>void }) => {
    const projects = useProjects(category)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((item) => (
                <PortfolioElement
                    key={item.id}
                    item={item}
                    onSelectedPortFolioItem={onSelectedPortFolioItem}
                />
            ))}

            {
                projects.length === 0 && (
                    <div className="col-lg-12 text-center">
                        <h4>No items found</h4>
                    </div>
                )
            }

        </div>
    )
}

export default PortfolioContainer;