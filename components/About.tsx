'use client'
import {motion} from "framer-motion";

export default function about() {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:ml-40">
                À Propos
            </h3>
            <motion.img
                initial={{x: -200, opacity: 0}}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once:true}}
                src="./images/profil-about.png"
                alt="Image de profil de l'auteur"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-8 md:px-10">
                <h4 className="text-2xl md:text-4xl font-semibold ">Qui suis-je ?</h4>
                <p className="text-sm md:text-base">
                    Je m'appelle  Doryan Lièvre j'ai 25 ans et je suis développeur web.
                    💻 Passionné par l'informatique et les nouvelles technologies depuis mon plus jeune âge, mes premiers Lego étaient d'anciens ordinateurs. Enfant, j'ai toujours voulu comprendre comment les choses fonctionnaient, que ce soit un ordinateur, une télévision, ou pourquoi l'écran s'allumait. Pour trouver les réponses à ces questions, j'ai naturellement orienté mes études vers le développement informatique.
                    🗓️ Aujourd'hui, je suis à la recherche d'une opportunité en alternance ou en CDI.
                    Parallèlement, je poursuis ma passion et développe mes connaissances grâce à des formations telles qu'awwwards et Udemy, tout en lisant des livres sur le développement. Je suis très curieux et je m'efforce constamment d'élargir mon champ de compétences.
                </p>
            </div>
        </motion.div>
    )
}