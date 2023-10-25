'use client';
import { motion } from 'framer-motion';
import ExperienceCard from "@/components/ExperienceCard";
import ScrollContainer from 'react-scroll-horizontal';
export default function StudyExperience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Formation
            </h3>
            <ScrollContainer
                reverseScroll = { true }
                className="w-ful flex space-x-5 overflow-scrolling overflow-x-scroll overflow-x-hidden p-10 snap-x snap-mandatory scroll-smooth scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#22d3ee]/80 "
            >
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </ScrollContainer>
        </motion.div>
    )
}
