import DealOfWeek from "@/components/pages/home/dealOfWeek";
import Service from "@/components/pages/home/service";
import Slider from "@/components/pages/home/slider";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <Slider />
      <Service />
      <DealOfWeek />
    </div>
  );
}
