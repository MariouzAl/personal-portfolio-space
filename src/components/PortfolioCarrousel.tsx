
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"



export function PortfolioCarrousel({ items, className }: { items: string[], className?: string }) {
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
        current*count
    }, [api])



    return (
        <div className={`${className ?? ''} `}>
            <Carousel
                setApi={setApi}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-2 flex items-center justify-center h-full">
                                <Card>
                                    <CardContent className="flex items-center justify-center w-[240px] h-[240px] bg-white">
                                        <img 
                                        className="max-w-full max-h-full object-cover"
                                         src={item} alt="" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    )
}




export default PortfolioCarrousel;
