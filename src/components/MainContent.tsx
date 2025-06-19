import { PortfolioSection, AboutSection, HeroSection, ResumeSection, SkillSection, StatsSection ,TestimonialSection} from "../sections";
import useScrollSpy from "../hooks/useScrollSpy";
import ServicesSection from "../sections/ServicesSection";
import { useLocation } from "react-router";
import { useEffect } from "react";
import PassionsSection from "@/sections/PassionsSection";

const MainContent = ({ onSectionChange }: { onSectionChange: (section: string) => void }) => {
    const { sectionRefs } = useScrollSpy(onSectionChange);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace("#", ""));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <main className="lg:ml-[300px]">
            <HeroSection ref={(el) => { sectionRefs.current["hero"] = el; }} id="hero" />
            <AboutSection ref={(el) => { sectionRefs.current["about"] = el }} id="about" />
            <StatsSection />
            <SkillSection />
            <ResumeSection ref={(el) => { sectionRefs.current["resume"] = el }} id="resume" />
            <PortfolioSection ref={(el) => { sectionRefs.current["portfolio"] = el }} id="portfolio" />
            <ServicesSection ref={(el) => { sectionRefs.current["services"] = el }} id="services" />
            <TestimonialSection ref={(el) => { sectionRefs.current["testimonial"] = el }} id="testimonial"></TestimonialSection>   
            <PassionsSection ref={(el) => { sectionRefs.current["passions"] = el }} id="passions"></PassionsSection>
        </main>
    );
};

export default MainContent;