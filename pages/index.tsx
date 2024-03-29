import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Webrack</title>
      </Head>

    <Header />

    <section id="hero" className="snap-start">
    <Hero/>
    </section>

    <section id="about" className="snap-center">
    <About />
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
    <Experience />
    </section>

    {/* Skills */}

    {/* Projects */}

    {/* Contact us  */}

    </div>
  );
};

export default Home;
