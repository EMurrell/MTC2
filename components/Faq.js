import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "How long will it take to get my new website?",
    answer: "Projects typically take around 3-5 business days to complete.",
  },
  {
    question: "Will my website require updates and maintenance?",
    answer:
      "We use modern jamstack technologies (Next.js, Netlify, etc) that, unlike Wordpress, DO NOT require constant upgrades, plugins, etc.",
  },
  {
    question: "Do you provide on-going support?",
    answer:
      "Yes, we are happy to help anytime!  After completion of your project, support is available at an hourly rate of $55/hour.",
  },
  {
    question: "Who will own my website?",
    answer:
      "You will always retain 100% ownership of your website and it's content.",
  },
  {
    question: "What about SEO?",
    answer:
      "Our websites are developed following SEO best practices, and are optimized for ranking algorithms to easily find your website. ",
  },
  {
    question: "Do you write copy for websites?",
    answer:
      "Basic copywriting is included, however if you require a more extensive amount of writing, custom solutions are offered.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className=" font-display">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-neutral-200">
          <h2 className="text-3xl font-medium text-center text-neutral-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-neutral-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-base lg:text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-neutral-400">
                        <span className=" text-neutral-900">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
                      <p className="text-base text-neutral-700 font-body">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
