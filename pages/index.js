import Head from "next/head";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Skills from "@/layouts/Skills";
import Projects from "@/layouts/Projects";
import Footer from "@/layouts/Footer";
import Contact from "@/layouts/Contact";
import Navbar from "@/layouts/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amish Verma | Portfolio</title>
        <meta name="description" content="Amish Verma's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
