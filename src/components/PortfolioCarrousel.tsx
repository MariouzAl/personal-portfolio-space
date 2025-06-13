
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
        current * count
    }, [api])



    return (
    <div className={`${className ?? ''}`}>
        <Carousel
            setApi={setApi}
            className="w-full h-full flex items-center justify-center"
            plugins={[
                Autoplay({
                    delay: 2000000,
                }),
            ]}
        >
            <CarouselContent className="w-full h-full">
                {items.map((item, index) => (
                    <CarouselItem key={index} className="w-full h-full">
                        <Card className="w-full h-full">
                            <CardContent className="aspect-[1/1] flex items-center justify-center w-full h-full">
                                <img
                                    className="w-full h-full max-w-full max-h-full object-cover"
                                    src={item}
                                    alt=""
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </div>
)
}




export default PortfolioCarrousel;
