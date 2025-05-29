import { useEffect, useState } from "react";

const PortfolioModal = ({ isOpen,
    title = "Product1",
    onClose, }:
    {
        isOpen: boolean;
        title?: string;
        onClose: () => void;
    }) => {
    const [show, setShow] = useState(isOpen);
    const [animation, setAnimation] = useState("animate-fade-in");

    useEffect(() => {
        console.log('usseEffect')
        if (show) {
            setShow(true);
            setAnimation("animate-fade-in");
        } else  {
            console.log("animate-fade-out")
            setAnimation("animate-fade-out");
            // Espera la duración de la animación antes de desmontar
            const timeout = setTimeout(() => { onClose() }, 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen, show]);

    const onCloseHandler = () => {
        console.log( 'onCloseHandler')
        setShow(false)
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center  bg-black  z-[999]  bg-blend-overlay" >
            <div className={`modal-content transition-all duration-300 ease-out transform ${animation}`}>

                <img className="min-[200px] max-h-[calc(100vh-85px)]" src="src/assets/img/portfolio_thumbnail.png" alt="" />
                <div className="h-auto w-full absolute bottom-0 py-5 px-2.5 order-2 max-h-[78vh] overflow-auto pb-12">
                    <div className="py-6 px-5">
                        <h4 className="text-white text-base font-medium mb-5 leading-5 capitalize">{title}</h4>
                    </div>
                </div>
            </div>
            <button className="cursor-pointer w-9 h-9 absolute top-4 right-2.5 bg-black/75 rounded-[4px] flex flex-col items-center justify-center" aria-label="Close" data-taborder="3"
                onClick={onCloseHandler}
            >
                <svg className="w-[18px] h-auto block self-center fill-amber-50" x="0px" y="0px" viewBox="0 0 512 512" ><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"></path></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path></g></g></svg>
            </button>
            <button className="cursor-pointer top-[45%] absolute bg-black/35 hover:bg-black/75 left-8 w-[40px] h-[50px]  flex flex-col rounded-[4px] justify-center" aria-label="Previous" data-taborder="2">
                <svg className="w-[25px] h-auto block self-center fill-amber-50" x="0px" y="0px" viewBox="0 0 477.175 477.175" ><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path></g></svg>
            </button>
            <button className="cursor-pointer top-[45%] absolute bg-black/35 hover:bg-black/75 right-8 w-[40px] h-[50px]  flex flex-col rounded-[4px] justify-center" aria-label="Previous" data-taborder="2">
                <svg className="w-[25px] h-auto block self-center fill-amber-50" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 477.175 477.175" > <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></g></svg>
            </button>
        </div >
    )
}

export default PortfolioModal;