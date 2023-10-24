// @flow
'use cient';
import { motion } from 'framer-motion';
import * as React from 'react';
export default function ExperienceCard(){
    return (
        <article className="mr-[20px] mt-40 h-[65%] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[650px] snap-center bg-[#292929] p-10 opacity-40 cursor-pointer transition-opacity duration-200 hover:opacity-100">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="/images/yes_we_dev_logo.png" alt="Logo de l'entreprise Yes We Dev"/>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Développeur web</h4>
                <p className="font-bold text-2xl mt-1">Yes We Dev</p>
                <div className="flex space-x-2 my-2">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/html.png" alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/css.png" alt=""
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/wordpress.png" alt=""
                    />
                </div>
                <p className="uppercase py-5 text-gray-300 ">De:  à:</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>description</li>
                    <li>description</li>
                    <li>description</li>
                    <li>description</li>
                    <li>description</li>
                </ul>
            </div>
        </article>
    );
};