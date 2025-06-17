import { forwardRef } from "react"
import { useTranslation } from "react-i18next"
import   TestimonialCarousel from "../components/TestimonialCarousel";
import { useTestimonial } from "../hooks/useTestimonials";

const TestimonialSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
  const testimonials=useTestimonial()
  const { t } = useTranslation();

  return <section id={props.id} ref={ref} className="light-background bg-[var(--background-color)] text-[var(--text-color)] py-14">

    <div className="width-full px-3 pb-14 section-title">
      <h2 className="emphasis-title">{t('testimonials.title')}</h2>
      <p>{t('testimonials.intro')}</p>
    </div>

    <TestimonialCarousel items={testimonials}></TestimonialCarousel>

  </section>
})

export default TestimonialSection


