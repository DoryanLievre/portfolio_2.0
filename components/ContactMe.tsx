import * as React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {PageInfo} from "@/typings";

type Props = {
  pageInfo: PageInfo;
};
export default function ContactMe({pageInfo}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly items-center mx-auto pt-[100px]">
      <h3 className="absolute top-24 md:top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-lg md:text-4xl font-semibold text-center">
          Mon profil vous intérésse ?{" "}
          <span className="decoration-[#22d3ee]/50 underline">Parlons-en.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#22d3ee] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">{pageInfo.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#22d3ee] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#22d3ee] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">
              {pageInfo.address}
            </p>
          </div>
        </div>

        <form className="w-full md:w-fit mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <input
                placeholder="Nom et prénom"
                className="contactInput w-full md:w-1/2"
                type="text"
              />
              <input
                placeholder="Mail"
                className="contactInput w-full md:w-1/2"
                type="text"
              />
            </div>
            <input
              placeholder="Objet"
              className="contactInput w-full"
              type="text"
            />
            <textarea placeholder="Message" className="contactInput w-full" />
            <button
              type="submit"
              className="bg-[#22d3ee] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
