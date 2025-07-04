import { useEffect, useState } from "react";
import type { PortfolioItemType } from "../hooks/useProjects";
import PortfolioCarrousel from "./PortfolioCarrousel";
import { useTranslation } from "react-i18next";

type PortfolioModalProps = {
    items: PortfolioItemType[];
    isOpen: boolean;
    currentItem: PortfolioItemType;
    title?: string;
    onClose: () => void;
};

const PortfolioModal = ({ isOpen, currentItem, onClose, items }: PortfolioModalProps) => {
    const {t} = useTranslation();
    const [show, setShow] = useState(isOpen);
    const [animation, setAnimation] = useState("animate-fade-in");
    const [currentIndex, setCurrentIndex] = useState(
        items.findIndex(i => i.id === currentItem.id)
    );
    useEffect(() => {
        setCurrentIndex(items.findIndex(i => i.id === currentItem.id));
    }, [currentItem, items]);
    useEffect(() => {
        if (show) {
            setShow(true);
            setAnimation("animate-fade-in");
        } else {
            console.log("animate-fade-out")
            setAnimation("animate-fade-out");
            // Espera la duración de la animación antes de desmontar
            const timeout = setTimeout(() => { onClose() }, 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen, show]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // Limpieza por si el componente se desmonta
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const onCloseHandler = () => {
        console.log('onCloseHandler')
        setShow(false)
    }
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    if (!isOpen) return null;
    const item = items[currentIndex];

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs  bg-black/90  z-[999]  bg-blend-overlay" >
            <div className={`overflow-auto w-full h-full max-w-[98vw] max-h-[98vh] lg:p-20 flex flex-col sm:flex-row transition-all duration-300 ease-out transform ${animation}`}>
                <PortfolioCarrousel className="basis-1/3 flex" items={item.images ?? ['./img/portfolio_thumbnail.png']}></PortfolioCarrousel>
                <div className="basis-2/3 py-5 px-2.5 landscape:overflow-auto">
                    <div className="py-6 px-5">
                        <h4 className="text-white text-base  mb-2 leading-5 capitalize font-extrabold font-raleway">{t(`portfolio.projects.${item.key}.project` as any)}</h4>
                        <span className="text-white font-semibold font-roboto text-sm">{item.companyName}</span>
                        <p className="text-white font-light font-roboto mt-5">{t(`portfolio.projects.${item.key}.shortDescription` as any)}</p>
                        {item.link && (<a href={item.link} target="_blank" className="text-[var(--accent-color)] font-semibold font-roboto text-sm">{t('portfolio.viewMoreInfo')}</a>)}
                        {item.projectLink && (<a href={item.projectLink} target="_blank" className="text-[var(--accent-color)] font-semibold font-roboto text-sm">{t('portfolio.viewProject')}</a>)}
                    </div>
                    <data >
                        {item.builtWith && item.builtWith.length > 0 && (
                            <div className="flex flex-wrap gap-2 px-5">
                                {item.builtWith.map((tech, index) => (
                                    <span key={index} className="text-white text-sm font-semibold bg-[var(--accent-color)]/50 px-3 py-1 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </data>
                </div>
            </div>
            <button className="cursor-pointer w-9 h-9 absolute top-4 right-2.5 bg-black/75 rounded-[4px] flex flex-col items-center justify-center" aria-label="Close" data-taborder="3"
                onClick={onCloseHandler}
            >
                <svg className="w-[18px] h-auto block self-center fill-amber-50" x="0px" y="0px" viewBox="0 0 512 512" ><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"></path></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path></g></g></svg>
            </button>
            <button onClick={handlePrev} className="cursor-pointer top-[45%] absolute bg-black/35 hover:bg-black/75 left-8 w-[40px] h-[50px]  flex flex-col rounded-[4px] justify-center" aria-label="Previous" data-taborder="2">
                <svg className="w-[25px] h-auto block self-center fill-amber-50" x="0px" y="0px" viewBox="0 0 477.175 477.175" ><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path></g></svg>
            </button>
            <button onClick={handleNext} className="cursor-pointer top-[45%] absolute bg-black/35 hover:bg-black/75 right-8 w-[40px] h-[50px]  flex flex-col rounded-[4px] justify-center" aria-label="Previous" data-taborder="2">
                <svg className="w-[25px] h-auto block self-center fill-amber-50" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 477.175 477.175" > <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></g></svg>
            </button>
        </div >
    )
}

export default PortfolioModal;