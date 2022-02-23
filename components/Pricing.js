import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import { CheckIcon } from "@heroicons/react/outline";
import Arrow from "./Arrow";

const tiers = [
  {
    name: "Static",
    href: "#",
    price: 749,
    description: "A quick way to get your business online.",
    features: [
      "One multi-page, multi-section website (up to 3 pages)",
      "Custom domain*",
      "2 revisions included",
      "Free non-premium stock photos and illustrations",

      "Assist with 'Google My Business' setup",
    ],
  },
  {
    name: "Dynamic",
    href: "#",
    price: 1249,
    description: "Gives you the power to edit.",
    features: [
      "One multi-page, multi-section website (up to 6 pages)",
      "Custom domain*",
      "3 revisions included",
      "Free non-premium stock photos and illustrations",

      "Assist with 'Google My Business' setup",
      "CMS integration - allows you to edit and publish changes without code",
      "Setup custom email hosting/Google Workspace**",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="Pricing" className="pt-12 font-display">
      <FadeIn>
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-1 lg:max-w-none">
            <p className="text-4xl font-medium text-neutral-800 lg:text-6xl">
              Pay Once.
            </p>
            <p className="pt-1 text-2xl font-medium lg:pt-3 lg:text-4xl text-neutral-800">
              No monthly hosting fees.
            </p>
          </div>
        </div>

        <div className="pb-12 mt-8 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 z-10 h-3/4" />

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0 ">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col mx-2 overflow-hidden border shadow-md border-highlight1"
                  >
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div className="flex flex-row">
                        <Arrow />
                        <h3
                          className="inline-flex px-2 py-1 text-xl font-semibold tracking-wide uppercase md:text-2xl text-neutral-800 "
                          id="tier-standard"
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <div className="flex items-baseline mt-4 text-6xl font-semibold text-neutral-800">
                        ${tier.price}
                      </div>
                      <p className="mt-5 text-lg font-medium text-neutral-800 font-body">
                        {tier.description}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-white font-body sm:p-10 sm:pt-6">
                      <ul role="list" className="space-y-4">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="w-6 h-6 text-highlight1"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base text-neutral-800">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="">
                        <a
                          href={tier.href}
                          className="flex items-center justify-center px-5 py-3 text-base font-medium border shadow-md text-neutral-800 bg-highlight1 border-highlight1 shadow-neutral-500/50 hover:text-highlight1 hover:bg-transparent"
                          aria-describedby="tier-standard"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative px-4 mx-auto mt-8 text-xs max-w-7xl sm:px-6 lg:px-8 lg:mt-5 text-neutral-800">
            <div className="max-w-md mx-auto lg:max-w-5xl ">
              <p>
                * We buy your domain for your first year. Domain renewal
                typically costs approx. $15 per YEAR. Premium domains may be
                purchased at an extra cost. We do not receive any portion of
                these payments.
              </p>{" "}
              <p>
                ** Custom email hosting/
                <a
                  href="https://workspace.google.com/pricing.html?gclid=CjwKCAiA55mPBhBOEiwANmzoQmEuufRueGbdWlalzcLKSN_WebvB_43Mrwr9IBaGv5gXlLcFq29VgBoCFnMQAvD_BwE&gclsrc=aw.ds"
                  className="italic text-highlight1"
                >
                  Google Workspace
                </a>{" "}
                setup is optional, monthly charges apply and are payable to
                Google. We do not receive any portion of these payments.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
