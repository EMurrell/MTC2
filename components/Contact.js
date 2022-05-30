import Link from "next/link";
import { Facebook } from "@icons-pack/react-simple-icons";
import {
  MailIcon,
  ArrowNarrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import FadeUp from "../animations/FadeUp";
import { Framer, Nextdotjs, Tailwindcss } from "@icons-pack/react-simple-icons";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer
      id="Contact"
      className="flex flex-col px-8 pt-10 xl:h-auto md:px-24 lg:px-52 bg-neutral-900 text-neutral-200 font-display "
    >
      <div className="flex flex-col pt-12 pb-24 2xl:py-20 lg:flex-row ">
        <FadeUp>
          <h1 className="pr-2 text-3xl font-medium md:text-4xl lg:text-5xl lg:w-1/2">
            Mason&apos;s Touch Construction
          </h1>
          <div className="flex flex-row mt-4 mb-12 text-neutral-100">
            <a href="mailto:masontouch@gmail.com" className="inline-flex">
              <MailIcon className="w-8 h-8 mr-6 hover:text-highlight1" />
            </a>
            <a href="tel:+1-613-304-3952" className="inline-flex">
              <PhoneIcon className="w-8 h-8 mr-6 hover:text-highlight1" />
            </a>
            <a href="https://www.facebook.com/Masons-Touch-construction-505787042949889">
              <Facebook className="w-8 h-8 hover:text-highlight1" />
            </a>
          </div>
        </FadeUp>
        <DelayedFadeIn>
          <div className="flex flex-col text-lg font-light lg:text-xl font-body">
            <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
              <h2 className="flex flex-row w-max">Email: &nbsp;</h2>
              <a href="mailto:masontouch@gmail.com" className="inline-flex">
                masontouch@gmail.com
              </a>
            </div>

            <div className="flex flex-col mb-6 transition duration-300 ease-in-out transform cursor-pointer lg:mx-6 h-max w-max hover:shadow-bottom">
              <h2 className="flex flex-row w-max">Phone: &nbsp;</h2>
              <a href="tel:+1-613-304-3952" className="inline-flex">
                (613) 304-3952
              </a>
            </div>
          </div>
        </DelayedFadeIn>
      </div>
      <div className="flex flex-col justify-center py-8 text-lg text-center border-t border-neutral-400 lg:text-xl text-neutral-400">
        &copy; {getCurrentYear()} MTC All Rights Reserved <br />
        Powered by Trailbridge Web
      </div>
    </footer>
  );
}
