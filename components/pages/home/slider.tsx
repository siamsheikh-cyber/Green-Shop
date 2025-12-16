import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
const Array = [
    {
        id: 1,
        image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16343905891630493728s2.jpg",
    },
    {
        id: 2,
        image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16343906281630493865s3.jpg",
    },
    {
        id: 3,
        image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16343905891630493728s2.jpg",
    },
    {
        id: 4,
        image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16343906281630493865s3.jpg",
    },
    {
        id: 5,
        image: "https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/16343905891630493728s2.jpg",
    }
]

function Slider() {
    return (
        <div className="my-container">
            <Carousel className="w-full mt-8 rounded-lg overflow-hidden">
                <CarouselContent>
                    {Array.map((item, index) => (
                        <CarouselItem key={item.id}>
                            <Image
                                src={item.image}
                                alt='image'
                                width={1200}
                                height={400}

                                className="w-full h-100 object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 cursor-pointer" />
                <CarouselNext className="absolute right-4 top-1/2 cursor-pointer" />
            </Carousel>
        </div>
    );
}

export default Slider;