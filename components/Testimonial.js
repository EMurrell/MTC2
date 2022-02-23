import Image from "next/image";
import Arrow from "./Arrow";
import {
  ArrowNarrowRightIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

export default function Testimonials() {
  return (
    <section className="py-10 overflow-hidden md:py-12 font-display ">
      <div className="px-8 lg:px-8">
        <div className="flex flex-col justify-center ">
          <h1 className="py-4 text-2xl font-medium text-center md:text-3xl text-neutral-800">
            What Our Clients Say:
          </h1>
          <div className="flex self-center w-24 border-t-2 border-highlight1"></div>
          <blockquote className="mt-4">
            <div className="max-w-3xl mx-auto text-lg leading-7 text-center text-neutral-800 md:text-2xl ">
              <p>
                &ldquo;I needed to modernize my old website, and I&apos;m happy
                I came across (company-name). Eric did a great job designing my
                new site, and was really easy to work with. I wasn&apos;t really
                sure what I wanted but they guided me through the whole process.
                I would easily recommend them.&rdquo;
              </p>
            </div>
            <footer className="mt-2">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mt-3 text-center">
                  <div className="pl-4 opacity-90">
                    <Image
                      src="/mtclogo2.png"
                      alt="mtc logo"
                      width={100}
                      height={55}
                    />
                  </div>
                  <p className="text-base font-medium font-body text-neutral-900">
                    Phillip Lavergne
                  </p>

                  <p className="text-base font-medium font-body text-neutral-600">
                    Owner, Mason&apos;s Touch Construction
                  </p>
                  <a href="https://masonstouch.com">
                    <p className="flex flex-row pl-2 text-base underline font-body text-highlight1">
                      View Website &nbsp;{" "}
                      <ExternalLinkIcon className="w-4 h-6 text-highlight1" />
                    </p>
                  </a>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
