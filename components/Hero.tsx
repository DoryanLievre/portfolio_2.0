// @flow
'use client';
import * as React from 'react';
import {Cursor,  useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ['Hello, Je m\'appelle Doryan Lièvre',
            'Je suis un développeur curieux et passionné',
            'Bienvenue sur mon portfolio'
        ],
        loop: true,
        delaySpeed: 2000,
        });
    return (
        <div className="h-screen flex flex-column space-y-8 items-center justify-center text-center overflow-hidden relative">
            <div className="relative">
                <BackgroundCircles/>
                <Image className="relative rounded-full h-32 w-32 object-cover mx-auto" src="/images/profil-picture.png" height={300} width={300} alt="Image de profil de l'auteur" />
                <div className=" relative z-20">
                    <h2 className="text-sm uppercase text-gray-400 pb-2 pt-8 tracking-[10px]">Développeur Fullstack JS</h2>
                    <h1 className="relative text-4xl lg:text-6xl font-semibold px-10">
                        <span className="mr-3">{text}</span>
                        <Cursor cursorColor="#22d3ee" />
                    </h1>
                    <div className="pt-5">
                        <Link href="#about">
                            <button className="heroButton">À Propos</button>
                        </Link>
                        <Link href="#experience">
                            <button className="heroButton">Mon Expérience</button>
                        </Link>
                        <Link href="#study">
                            <button className="heroButton">Mes Formations</button>
                        </Link>
                        <Link href="#skills">
                            <button className="heroButton">Mes Skills</button>
                        </Link>
                        <Link href="#project">
                            <button className="heroButton">Mes Projets</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}