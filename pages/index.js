import Head from "next/head";
import Image from "next/image";
import Meta from "../components/Meta";
import Nav from "../components/Nav.js";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import About from "../components/About";

import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <Features />
      <About />
      <Testimonial />
      <Work />
      <Contact />
    </>
  );
}
