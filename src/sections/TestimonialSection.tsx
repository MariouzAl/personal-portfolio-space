import { forwardRef } from "react"

const TestimonialSection =forwardRef<HTMLElement, { id: string }>(({ id }) => {


    return (<section id={id} className="testimonials section light-background">

      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">



      </div>

    </section>)
})

export default TestimonialSection