import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import Image from "next/image";

export default function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <section className="flex flex-col w-full pt-12 md:py-6 md:flex-row font-display">
      <div className="flex flex-col justify-center pb-10 md:px-24">
        <h1 className="text-3xl font-medium text-center md:text-4xl text-neutral-800">
          Recent Work
        </h1>

        <div className="flex self-center w-24 pt-2 border-t-2 border-highlight1"></div>
      </div>
      <div className="flex overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row h-auto ">
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/stonework500.jpg" alt="" width={350} height={350} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/demo500.jpg" alt="" width={350} height={350} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/chimney500.jpg" alt="" width={350} height={350} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/interlock500.jpg" alt="" width={350} height={350} />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image src="/wall500.jpg" alt="" width={350} height={350} />
          </div>
        </div>
      </div>
    </section>
  );
}
