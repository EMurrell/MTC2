import Image from "next/image";
import FadeUp from "../animations/FadeUp";

export default function Testimonials() {
  return (
    <section
      id="Testimonial"
      className="py-24 -mt-16 overflow-hidden tracking-tight bg-center bg-cover md:py-28 font-display bg-background2"
    >
      <div className="px-8 ">
        <div className="flex flex-col justify-center ">
          <h1 className="py-4 text-2xl font-medium text-center text-white md:text-3xl">
            What Our Clients Say:
          </h1>
          <div className="flex self-center w-24 border-t-2 border-highlight1"></div>

          <blockquote className="mt-8">
            <FadeUp>
              <div className="max-w-3xl mx-auto text-base font-light leading-relaxed text-center text-white font-body md:text-xl ">
                <em>
                  &ldquo;I had an opening made in a brick wall to allow for a
                  patio door. The Wall was originally built in the 1950s so I
                  expected difficulties. Phil, the owner of Mason&apos;s Touch,
                  was able to expertly remove, cut, and replace the bricks
                  without leaving a trace. <br />
                  <br />
                  Seriously, I think my yard is cleaner after he did the work
                  than before. It looks like the house always had that opening.
                  It&apos;s perfect. If anyone needs a skilled mason,
                  Mason&apos;s Touch is the place to go.&rdquo;
                </em>
              </div>
            </FadeUp>
            <footer className="mt-4">
              <div className="flex flex-col items-center justify-center">
                <FadeUp>
                  <div className="flex flex-col items-center mt-3 text-center">
                    <p className="text-base font-medium text-white font-body">
                      David Lea
                    </p>

                    <p className="text-base font-medium font-body text-neutral-400">
                      MTC Client
                    </p>
                  </div>
                </FadeUp>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
