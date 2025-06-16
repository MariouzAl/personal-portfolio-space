import type { PortfolioItemType } from "../hooks/useProjects";


const PortfolioItem = ({
    item,
    selected,
    onSelect,
    onSelectedPortFolioItem
}: {
    item: PortfolioItemType;
    selected: boolean;
    onSelect: () => void;
    onSelectedPortFolioItem: (item: PortfolioItemType) => void;
}) => {
    const { project, shortDescription, link, cover: image = "./img/portfolio_thumbnail.png", category } = item
    return (
        <div className="group overflow-hidden relative  h-[252px] drop-shadow-xl hover:drop-shadow-xl/50  "
            onTouchStart={onSelect}
        >
            <img src={image} className={`w-full h-full object-cover group-hover:scale-110 ${selected ? "scale-110" : ""} transition-all duration-300`} alt="" />
            <div
                className={`absolute inset-0 z-[3] bg-black/50 transition-all duration-300 p-4
          ${selected ? "opacity-100" : "opacity-0"}
          ${selected ? "block" : "hidden"}
          group-hover:block hidden
          group-hover:opacity-100
        `}
            >
                <h4 className="text-sm py-1.5 px-2.5 font-normal text-white inline-block bg-[var(--accent-color)] ">{project}</h4>
                <p className="absolute bottom-2.5  left-0 right-0 text-base font-semibold text-white/80 mb-4  px-5 line-clamp-2">{shortDescription}</p>
                <a href={image} title={category[0]} onClick={(e) => { e.preventDefault(); onSelectedPortFolioItem(item) }}
                    className="absolute left-[calc(50%-40px)] text-[26px] top-[calc(50%-14px)] text-white transition hover:text-[var(--accent-color)] leading-[1.2]">
                    <i className="bi bi-zoom-in"></i>
                </a>
                <a href={link} title="More Details"
                    className="absolute left-1/2 text-[34px] top-[calc(50%-14px)] text-white transition hover:text-[var(--accent-color)] leading-0">
                    <i className="bi bi-link-45deg"></i>
                </a>
            </div>

        </div>
    );
}
export default PortfolioItem;