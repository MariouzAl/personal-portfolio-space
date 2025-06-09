export type PortfolioItemType = {
    id: number;
    title: string;
    description: string;
    image?: string;
    link: string;
    category: string;
}

const PortfolioItem = ({ item, onSelectedPortFolioItem }: {item:PortfolioItemType}&{onSelectedPortFolioItem:(item:PortfolioItemType)=>void}) => {
    const {title, description, link, image = "./img/portfolio_thumbnail.png", category} = item
    return (
        <div className="group h-full overflow-hidden relative ">
            <img src={image} className="w-full h-auto group-hover:scale-110 transition-all duration-300"  alt="" />
            <div className="absolute opacity-0 inset-0 z-[3] bg-black/50 hover:opacity-100 transition-all duration-300 p-4">
                <h4 className="text-sm py-1.5 px-2.5 font-normal text-white inline-block bg-[var(--accent-color)] ">{title}</h4>
                <p className="absolute bottom-2.5 text-center inline-block left-0 right-0 text-base font-semibold text-white/80 mb-4 ">{description}</p>
                <a href={image} title={category} onClick={(e)=>{e.preventDefault();onSelectedPortFolioItem(item)}}
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