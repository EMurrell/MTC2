import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      id="Testimonial"
      className="py-10 mt-6 overflow-hidden tracking-tight md:py-12 font-display"
    >
      <div className="px-8 ">
        <div className="flex flex-col justify-center ">
          <h1 className="py-4 text-2xl font-medium text-center md:text-3xl text-neutral-800">
            What Our Clients Say:
          </h1>
          <div className="flex self-center w-24 border-t-2 border-highlight1"></div>
          <blockquote className="mt-8">
            <div className="max-w-3xl mx-auto text-base font-light leading-relaxed text-center font-body text-neutral-900 md:text-xl ">
              <em>
                &ldquo;I had an opening made in a brick wall to allow for a
                patio door. The Wall was originally built in the 1950s so I
                expected difficulties. Phil, the owner of Mason&apos;s Touch,
                was able to expertly remove, cut, and replace the bricks without
                leaving a trace. <br />
                <br />
                Seriously, I think my yard is cleaner after he did the work than
                before. It looks like the house always had that opening.
                It&apos;s perfect. If anyone needs a skilled mason, Mason&apos;s
                Touch is the place to go.&rdquo;
              </em>
            </div>
            <footer className="mt-4">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mt-3 text-center">
                  <p className="text-base font-medium font-body text-neutral-900">
                    David Lea
                  </p>

                  <p className="text-base font-medium font-body text-neutral-600">
                    MTC Client
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
