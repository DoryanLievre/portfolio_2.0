import Image from 'next/image'
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-[#242424] text-white h-screen">
      <Header />
        <section id="hero">
          <Hero />
        </section>
    </main>
  )
}
