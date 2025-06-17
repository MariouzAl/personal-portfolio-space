import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import type { Testimonial } from "../hooks/useTestimonials";

const TestimonialCarousel = ({ items }: { items: Testimonial[] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    current * count
  }, [api])

  const navigateTo = (index: number) => {
    api?.scrollTo(index)

  }
  return <div className="w-full">
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="w-full h-full flex items-center justify-center"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}

    >
      <CarouselContent className="w-full h-full">
        {items.map((item, index) => (
          <CarouselItem key={index} className="w-[200px]">
            <div className="flex-col items-center justify-center">
              <blockquote>
                <div className="bg-white shadow-lg p-5 relative mb-9 rounded-[6px] mt-0 mx-3.5 mr-3.5 
                after:absolute
                after:content-[''] after:w-0  after:h-0 after:border-solid after:border-t-[20px] after:border-x-[20px] after:border-t-white
                after:border-r-[transparent] after:border-l-[transparent]
                 after:bottom-[-20px] after:left-[calc(50%-20px)]
                ">
                  <p className="italic font-roboto">
                    <i className="bi bi-quote quote-icon-left inline-block relative left-[-5px] text-[26px] leading-0 text-[var(--accent-color)] opacity-40" />
                    <span>
                      {item.comment}
                    </span>
                    <i className="bi bi-quote quote-icon-right inline-block relative left-[5px] text-[26px]  scale-y-[-1] scale-x-[-1]  leading-0 text-[var(--accent-color)] opacity-40 top-2.5" />
                  </p>
                </div>
                <footer className="flex flex-col items-center">
                  <img className="rounded-full" src={item.image} alt="" />
                  <cite>
                    <p className="text-center font-bold text-lg">
                      {item.who}
                    </p>
                    <p className="text-center text-sm text-gray-600">
                      {item.position}
                    </p>
                  </cite>
                </footer>
              </blockquote>

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

    <div className="flex w-full flex-row justify-center mt-8">
      <div >

        {
          Array.from({ length: count }).map((_, index) => {
            return <span
              id={index + ''}
              className={`w-3 h-3  inline-block rounded-full
              ${current === index + 1 ? "bg-[var(--accent-color)]" : 'bg-white'}
              border-[1px] 
              border-solid border-[var(--accent-color)] 
              mr-1 ml-1
              mt-0 mb-8 cursor-pointer `}
              onClick={() => navigateTo(index)}
            ></span>
          })
        }
      </div>
    </div>
  </div>;
};


export default TestimonialCarousel