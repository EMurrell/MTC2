import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import FadeRight from "../animations/FadeRight";

export default function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="flex flex-col w-full py-6 bg-center bg-no-repeat bg-cover md:pb-4 bg-blueprint md:pt-28 md:flex-row font-display text-neutral-900">
      <div className="flex flex-col px-12 py-8 md:px-24">
        <FadeRight>
          <h1 className="text-3xl font-medium text-center md:text-4xl">
            Gallery
          </h1>
        </FadeRight>
        <div className="self-center w-24 py-2 border-t-2 border-highlight1"></div>
        <DelayedFadeIn>
          <p className="pb-4 text-xl font-medium text-center md:text-2xl">
            We&apos;re passionate about our work, and it shows. Explore some of
            our recent projects.
          </p>
        </DelayedFadeIn>

        <div className="flex flex-row justify-center my-4">
          <button onClick={scrollPrev}>
            <ChevronLeftIcon className="w-10 h-10 mx-4 text-white bg-highlight1" />
          </button>
          <button onClick={scrollNext}>
            <ChevronRightIcon className="w-10 h-10 mx-4 text-white bg-highlight1" />
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row h-auto ">
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/stonework500.jpg"
              alt="picture of stonework"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/demo500.jpg"
              alt="picture of demolition site"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/chimney500.jpg"
              alt="picture of repaired chimney"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/interlock500.jpg"
              alt="picture of interlock walkway"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/wall500.jpg"
              alt="picture of brickwork"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/entrance500.jpg"
              alt="picture of entrance way"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/foundation500.jpg"
              alt="picture of cracked foundation"
              width={350}
              height={350}
            />
          </div>
          <div className="relative flex flex-shrink-0 w-4/5 m-1 md:w-auto ">
            <Image
              src="/poolhouse500.jpg"
              alt="picture of stone shed"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
