"use client";

import { motion } from "framer-motion";
import Skill from "@/components/Skill";
import { Skill as SkillType } from "@/typings";

type Props = {
    skills: SkillType[];
}

export default function Skills({skills}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col md:flex-row text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center  mx-auto xl:space-y-0  "
    >
      <h3 className="absolute top-24 md:top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill
                key={skill._id}
                skill={skill}
            />
        ))}
        {skills?.slice(skills.length /2, skills.length).map((skill) => (
            <Skill
                key={skill._id}
                skill={skill}
                directionLeft={true}
            />
        ))}
      </div>
    </motion.div>
  );
}
