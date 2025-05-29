
const TopScroll = ({ onClick, selectedSection }: { onClick: (link: string) => void, selectedSection: string }) => {
    const TOP_SECTION = "hero";
    const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick(`#${TOP_SECTION}`);
    };

    return (
        <a href="#" id="scroll-top" className={`nav-bar-toggle fixed top-auto bottom-5  ${selectedSection !== TOP_SECTION ? "flex" : "hidden"}`} title="Scroll to Top" onClick={clickHandler}>
            <i className="bi bi-arrow-up-short"></i>
        </a>
    )
}

export default TopScroll;