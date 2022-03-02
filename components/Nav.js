/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Github, Devdotto, Twitter } from "@icons-pack/react-simple-icons";
import { MailIcon } from "@heroicons/react/outline";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const links = [
  { name: "ABOUT", to: "#Features", id: 1 },
  { name: "TESTIMONIALS", to: "#Testimonial", id: 2 },
  { name: "CONTACT", to: "#Contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

export default function Nav() {
  const [open, cycleOpen] = useCycle(false, true);
  const [animateNav, setAnimateNav] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 600) {
        setAnimateNav(true);
      } else setAnimateNav(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`text-neutral-100 w-full flex  justify-between  font-display  fixed z-50 transition ease-in-out duration-500 ${
        animateNav && "shadow-xl "
      }`}
    >
      <div
        className={`flex w-screen py-4 bg-transparent   ${
          animateNav &&
          "py-0 text-black backdrop-blur-sm bg-neutral-300/70 trasition ease-in-out duration-500"
        } mx-auto   justify-between `}
      >
        <Link href="/">
          <a className="pr-12 mx-4 mt-2 text-2xl tracking-widest transition duration-100 ease-in-out transform cursor-pointer md:mt-8 font-logo md:text-3xl md:ml-8 lg:ml-16">
            <Image alt="logo" src="/mtclong-red.png" width={195} height={45} />
          </a>
        </Link>

        {/* The Side Bar Menu for screens smaller than 'Medium' */}
        <AnimatePresence>
          {open && (
            <motion.aside
              className="fixed top-0 right-0 h-screen bg-neutral-600 md:hidden overflow"
              initial={{ width: 0 }}
              transition={{ type: "tween" }}
              animate={{
                width: "95%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.3, duration: 0.15 },
              }}
            >
              <motion.div
                className="flex flex-col p-8 ml-4 text-2xl font-medium "
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <div className="pt-20 pb-2 border-neutral-100">
                  <Image
                    alt="logo"
                    src="/mtclong-red.png"
                    width={195}
                    height={45}
                  />
                </div>

                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    className="flex mt-20 transition duration-100 ease-in-out transform hover:shadow-bottom w-max text-highlight1"
                    variants={itemVariants}
                    aria-current={links.current ? "page" : undefined}
                    onClick={cycleOpen}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* The Hamburger Menu and Close Icons */}
        <div className="flex justify-end md:hidden ">
          <button className="px-2 m-2 cursor-pointer">
            <span className="sr-only ">Open main menu</span>
            <Hamburger toggled={open} toggle={cycleOpen} />
          </button>
        </div>

        {/* The Navbar on medium screens */}
        <div className="hidden pr-8 md:inline-flex ">
          {links.map(({ name, to, id }) => (
            <a
              key={id}
              href={to}
              className="pt-2 mx-8 my-8 text-lg font-normal transition duration-100 ease-in-out transform lg:mx-12 9 md:text-xl hover:shadow-bottom "
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
