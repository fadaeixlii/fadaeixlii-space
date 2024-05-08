"use client";
import React, { useEffect, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion, useScroll } from "framer-motion";
import { projects } from "@/constants";

const Projects = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects relative"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
        Project
      </h1>
      <div className=" w-full flex flex-col  gap-[90vh] px-10    ">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              // key={project.src}
              key={i}
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
