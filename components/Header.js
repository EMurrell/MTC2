import { motion } from "framer-motion";
import Nav from "./Nav";
import Meta from "./Meta";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import FadeRight from "../animations/FadeRight";
import FadeLeft from "../animations/FadeLeft";

import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/outline";
import DelayedFadeIn from "../animations/DelayedFadeIn";
import Link from "next/link";
import Head from "next/head";

export default function Header() {
  return (
    <section
      id="Home"
      className="flex flex-col w-full px-2 pt-12 overflow-y-visible bg-center bg-no-repeat bg-cover text-neutral-100 bg-hero font-display md:px-10 lg:px-20 xl:px-28 "
    >
      <main className="flex flex-col justify-center h-screen pt-16 text-center pb-28 md:pb-16">
        <FadeUp>
          <h2 className="flex flex-col pb-2 text-2xl font-medium md:text-3xl lg:text-4xl">
            MASON&apos;S TOUCH CONSTRUCTION
          </h2>
        </FadeUp>
        <DelayedFadeIn>
          <h1 className="flex justify-center py-2 text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Masonry + Foundation Repair
          </h1>
        </DelayedFadeIn>
        <DelayedFadeIn>
          <Link href={"/#Contact"} passHref>
            <button className="px-6 py-2 mt-4 mb-20 ml-1 text-xl font-normal text-white border-2 shadow-lg cursor-pointer border-highlight1 bg-highlight1 lg:px-10 lg:py-3 md:mt-6 lg:text-2xl shadow-neutral-600/30 hover:bg-transparent hover:text-highlight1">
              Contact Us
            </button>
          </Link>
        </DelayedFadeIn>
        <DelayedFadeIn>
          <div className="absolute bottom-4 inset-x-1/2">
            <ChevronDownIcon className="w-8 h-8 -ml-4 ease-in delay-75 animate-bounce" />
          </div>
        </DelayedFadeIn>
      </main>
    </section>
  );
}
