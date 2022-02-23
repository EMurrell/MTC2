const features = [
  {
    name: "Ultra-Fast",
    image: "/speedometer.png",
    description:
      "Our websites are built on modern web technologies (Jamstack), and are optimized for incredibly fast load times. ",
  },
  {
    name: "Fully Responsive",
    image: "/resp-dev.png",
    description:
      "We deliver pixel-perfect design that looks and works great on all devices and browsers.",
  },
  {
    name: "Intuitive Design",
    image: "/bulb.png",
    description:
      "Clear navigation and concise presentation of information are cornerstones of our design process.",
  },
];

export default function Example() {
  return (
    <div className="relative pb-12 bg-white font-display">
      <div className="h-40 bg-transparent"></div>
      <div className="max-w-md px-4 mx-auto text-center -mt-52 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="py-6">
                <div className="flow-root px-8 pb-8 mx-6 bg-white border shadow-lg lg:mx-0 md:mx-32 h-72 border-highlight1">
                  <div className="-mt-12">
                    <div>
                      <span className="inline-flex items-center justify-center p-4 py-6 bg-white border rounded-full shadow-lg border-highlight1">
                        <img src={feature.image} alt="" className="w-16 h-12" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-medium tracking-tight text-neutral-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base font-medium text-neutral-900 font-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
