import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import StudyExperience from "@/components/StudyExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-scroll z-o scrollbar scrollbar-track-gray-400/20 scrollbar-corner-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin  ">
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
        < StudyExperience/>
      </section>

      <section id="skills" className="snap-start">
          < Skills/>
      </section>

      <section id="project" className="snap-start">
          < Projects/>
      </section>
      <section id="contact" className="snap-start">
        < ContactMe/>
      </section>
    </main>
  );
}
