// @flow
"use client";
import * as React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from "@/typings";
import {urlForImage} from "@/sanity/lib/image";

type Props = {
    pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hello, Je m'appelle ${pageInfo?.name}`,
      "Je suis un développeur curieux et passionné",
      "Bienvenue sur mon portfolio",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      <div className="relative">
        <BackgroundCircles />
        <Image
          className="relative rounded-full h-32 w-32 object-cover mx-auto"
          src={urlForImage(pageInfo?.heroImage)?.url()}
          height={300}
          width={300}
          alt="Image de profil de l'auteur"
        />
        <div className=" relative z-20">
          <h2 className="text-sm md:text-lg uppercase text-gray-400 pb-2 pt-8 tracking-[5px] md:tracking-[10px]">
            {pageInfo?.role}
          </h2>
          <h1 className="relative text-2xl md:text-4xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#22d3ee" />
          </h1>
          <div className=" md:pt-5 flex flex-col md:flex-row pt-10">
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
          <h4 className="relative text-gray-500 text-sm md:text-lg text-center top-[75px] hidden md:block">
            Pour <span className="text-[#22d3ee]/50">scroller</span>{" "}
            horizontalement, utilisez{" "}
            <span className="text-[#22d3ee]/50">shift</span> + la{" "}
            <span className="text-[#22d3ee]/50">molette </span>de votre souris
          </h4>
        </div>
      </div>
    </div>
  );
}
