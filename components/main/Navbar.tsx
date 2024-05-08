import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] relative">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 cursive">
            Mohammad MohammadKhani
          </span>
        </a>
        <div
          className="w-[500px]
        h-full flex items-center justify-between md:mr-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        "
        >
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f862] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 cursive">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 ">
          {Socials.map((social) => (
            <a href={social.link} key={social.name}>
              <Image
                className="cursor-pointer"
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
