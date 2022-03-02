import FadeIn from "../animations/FadeIn";

const features = [
  {
    name: "New Construction",
    image: "/speedometer.png",
    description:
      "Our skilled team will build beautiful, solid new additions to your property. ",
  },
  {
    name: "Restoration",
    image: "/resp-dev.png",
    description:
      "We will restore damaged stone work and brick work back to it's original state.",
  },
  {
    name: "Demolition",
    image: "/bulb.png",
    description:
      "We can safely demolish and remove old, unwanted construction.",
  },
];

export default function Features() {
  return (
    <div id="Features" className="relative pb-12 font-display">
      <div className="h-32 bg-transparent"></div>
      <div className="max-w-md px-4 mx-auto -mt-48 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="">
          <div className="grid grid-cols-1 md:gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="py-6">
                <div className="flow-root px-10 pb-8 mx-6 bg-white shadow-lg h-60 shadow-neutral-500/50 lg:mx-0 md:mx-32 ">
                  <FadeIn>
                    <h3 className="text-2xl font-medium tracking-tight underline pt-11 text-neutral-900 ">
                      {feature.name}
                    </h3>
                    <p className="mt-4 text-lg text-neutral-900 ">
                      {feature.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
