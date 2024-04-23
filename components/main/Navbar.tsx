import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex items-center">
          <Image
            src={"/NavLogo.png"}
            height={70}
            width={70}
            className="cursor-pointer hover:animate-spin"
            alt="logo"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            WebChain DEV
          </span>
        </a>
        <div
          className="w-[500px]
        h-full flex items-center justify-between md:mr-20
        "
        >
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f862] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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
            <Link href={social.href} target="_blank" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
