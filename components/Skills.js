import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeLeft from "../animations/FadeLeft";
import { AnimatePresence, animatePresence, motion } from "framer-motion";
import {
  ReactJs,
  Github,
  Html5,
  Framer,
  Hyper,
  Stackoverflow,
  Affinityphoto,
  Visualstudiocode,
  CssThree,
  Vercel,
  Netlify,
  Npm,
  Nodedotjs,
  Nextdotjs,
  Tailwindcss,
  Javascript,
} from "@icons-pack/react-simple-icons";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="min-h-screen px-12 py-20 md:px-16 lg:px-32 2xl:px-64 text-neutral-100 bg-neutral-800 font-display"
    >
      <div className="flex flex-col w-full text-center">
        <div className="flex w-full lg:justify-center">
          <FadeLeft>
            <h1 className="flex text-4xl font-medium text-center w-max md:text-5xl lg:text-6xl shadow-bottom md:shadow-bottom2 lg:shadow-bottom3">
              Skills
            </h1>
          </FadeLeft>
        </div>

        <FadeIn>
          <div className="flex flex-row justify-center pt-16 font-body">
            <div className="flex flex-col ">
              <Html5 className="icon" />
              <p className="description">HTML</p>
              <ReactJs className="icon" />
              <p className="description">React</p>
              <Nodedotjs className="icon" />
              <p className="description">Node.js</p>

              <Netlify className="icon" />
              <p className="description">Netlify</p>
            </div>
            <div className="flex flex-col ">
              <CssThree className="icon" />
              <p className="description">CSS</p>
              <Nextdotjs className="icon" />
              <p className="description">Next.js</p>
              <Github className="icon" />
              <p className="description">Github</p>
              <Affinityphoto className="icon" />
              <p className="description">Affinity Photo</p>
            </div>
            <div className="flex flex-col ">
              <Javascript className="icon" />
              <p className="description">Javascript</p>
              <Tailwindcss className="icon" />
              <p className="description">TailwindCSS</p>
              <Visualstudiocode className="icon" />
              <p className="description">VS Code</p>
              <Framer className="icon" />
              <p className="description">Motion API</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
