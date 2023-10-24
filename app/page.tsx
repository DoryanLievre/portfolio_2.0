import Image from 'next/image'
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-o">
      <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
    </main>
  )
}
