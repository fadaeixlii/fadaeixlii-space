"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const projects = [
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description: "lorem ipsun asd jkgweoj fdsokfijrg dsffsd",
  },
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description: "lorem ipsun asd jkgweoj fdsokfijrg dsffsd",
  },
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description: "lorem ipsun asd jkgweoj fdsokfijrg dsffsd",
  },
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description: "lorem ipsun asd jkgweoj fdsokfijrg dsffsd",
  },
  {
    src: "/NextWebsite.png",
    title: "Modern Next.js Portfolio",
    description: "lorem ipsun asd jkgweoj fdsokfijrg dsffsd",
  },
];

const Projects = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"></h1>
      <div className=" w-full flex flex-col  gap-[100vh] px-10 relative   ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={project.src}
              i={i}
              scrollYProgress={scrollYProgress}
              targetScale={targetScale}
              range={[1 / projects.length, 1]}
              {...project}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
