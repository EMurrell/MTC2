export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center w-full px-8 tracking-tight font-display"
    >
      <h1 className="py-4 text-3xl font-medium text-center md:text-4xl text-neutral-800">
        Established 2008
      </h1>
      <div className="flex self-center w-24 border-t-2 border-highlight1"></div>
      <div className="flex flex-col justify-center pt-8 text-xl text-center md:text-2xl lg:text-3xl">
        <p className="py-4">
          Specializing in Foundation Repair, Parging, Chimney Repair, Stone Work
          and Brick Laying.
        </p>

        <p className="py-4">Family Owned and Operated.</p>
        <p className="py-4">Servicing Ottawa and surrounding region.</p>
      </div>
      <div className="flex flex-col justify-center px-8 py-4 mt-8 text-lg font-medium text-center border-2 shadow-lg place-self-center md:text-xl lg:text-2xl border-highlight1 text-highlight1 shadow-neutral-500/40">
        <h2>We Offer Free Estimates and a Quality Guarantee On All Projects</h2>
      </div>
    </section>
  );
}
