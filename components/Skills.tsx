'use client';

import { motion } from "framer-motion";
import Skill from "@/components/Skill";

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col md:flex-row text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center  mx-auto xl:space-y-0  ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>

           <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
               {/*TODO: Add skills and replace by the real values*/}
               <Skill
                   directionLeft={true}
                   imageSrc="images/react.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={true}
                   imageSrc="images/react.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={true}
                   imageSrc="images/react.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={true}
                   imageSrc="images/react.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={true}
                   imageSrc="images/react.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={true}
                   imageSrc="images/react.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={false}
                   imageSrc="images/wordpress.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={false}
                   imageSrc="images/wordpress.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={false}
                   imageSrc="images/wordpress.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={false}
                   imageSrc="images/wordpress.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={false}
                   imageSrc="images/wordpress.png"
                   paragraphText="40 projets"
               />
               <Skill
                   directionLeft={false}
                   imageSrc="images/wordpress.png"
                   paragraphText="40 projets"
               />
           </div>
        </motion.div>
    )
}