import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import DelayedFadeIn from "../animations/DelayedFadeIn";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-10 tracking-tight md:py-8 font-display "
    >
      <FadeRight>
        <h1 className="py-2 text-3xl font-medium text-center md:text-4xl text-neutral-800">
          Established 2008
        </h1>
      </FadeRight>

      <div className="flex self-center w-24 pt-2 border-t-2 border-highlight1"></div>

      <div className="flex flex-col justify-center py-6 text-xl text-center md:text-2xl lg:text-3xl">
        <DelayedFadeIn>
          <p className="py-4">
            Specializing in Foundation Repair, Chimney Repair, Stone Work and
            Brick Laying.
          </p>

          <p className="py-4">Family Owned and Operated.</p>

          <p className="py-4">Fully Licensed and Insured.</p>

          <p className="py-4 md:pb-12">
            Servicing Ottawa and Surrounding Region.
          </p>
        </DelayedFadeIn>
      </div>

      <div className="flex flex-col justify-center px-8 py-4 mt-8 text-lg font-normal text-center text-white border-4 shadow-lg bg-highlight1 place-self-center md:text-xl lg:text-2xl border-highlight1 shadow-neutral-900/70">
        <h2>We Offer a Quality Guarantee On All Projects.</h2>
      </div>
    </section>
  );
}
