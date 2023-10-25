"use client";
import { motion } from "framer-motion";

export default function Projects() {
  // TODO replace projetcs by real projects
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 pt-[50px]">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projets
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-corner-gray-400/20 scrollbar-thumb-[#22d3ee]/80 scrollbar-thin">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="/images/yes_we_dev_logo.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-center md:text-2xl">
                <span className="border border-[#22d3ee]/50 border-2 font-semibold px-2 rounded-2xl text-[#22d3ee]/80 mr-3 ">
                  <span className="text-white">{index + 1}</span> -{" "}
                  {projects.length}
                </span>
                Project Name
              </h4>
              <p className="text-lg text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus atque consectetur, debitis deleniti eum expedita
                facere fuga harum iusto neque nihil perferendis quibusdam
                reiciendis reprehenderit suscipit. Atque earum impedit iusto!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#22d3ee]/20 left-0 h-[400px] -skew-y-12" />
    </div>
  );
}
