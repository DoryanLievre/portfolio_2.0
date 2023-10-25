import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import StudyExperience from "@/components/StudyExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-scroll z-o scrollbar scrollbar-track-gray-400/20 scrollbar-corner-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin scroll-smooth  ">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="study" className="snap-center">
        <StudyExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="project" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

        <Link href="#hero">
            <div className="fixed bottom-5 right-5 cursor-pointer hidden md:block z-50">
                <img className="h-12 w-12 xl:w-16 xl:h-16 bg-[#22d3ee]/50 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/images/noun-arrow-top.png" alt=""/>
            </div>
        </Link>
        <footer className="sticky w-screen flex items-center justify-center bg-gray-500/20 snap-center ">
            <p className="text-2xl text-[#22d3ee]/50 font-semibold tracking-[2px]  py-10">Merci d'avoir scroller jusqu'ici !</p>
        </footer>
    </main>
  );
}
