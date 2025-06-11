import { useTranslation } from "react-i18next";
import TypedWords from "../components/TypedWords";
import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const{t} =useTranslation();
    const whatAmI = [
        t('whatAmI.software_eng'), 
        t('whatAmI.developer'), 
        t('whatAmI.fullstack_developer'), 
        t('whatAmI.frontend_developer'),
        t('whatAmI.watercolor_artist'),
        t('whatAmI.padel_coach'),
        t('whatAmI.karaoke_singer')]
    return (
        <section  ref={ref} id={props.id} className="w-[100%] h-[100vh] relative  flex items-center justify-center dark-background hero text-white ">
            <img src="./img/hero-bg.jpeg" alt="" data-aos="fade-in"
                className=" absolute inset-0 w-[100%] h-[100%] object-cover z-[1] "></img>
            <div className="container z-[2] px-3 mx-12" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-3xl font-raleway font-bold">Mario Rivera </h2>
                <p className="typed font-roboto text-xl">{t("whatAmI.i_am")} <TypedWords words={whatAmI} typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                ></TypedWords></p>
            </div>
        </section>
    );
})
export default HeroSection;