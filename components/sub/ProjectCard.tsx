"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  i: number;
  range: number[];
  targetScale: number;
  scrollYProgress: MotionValue<number>;
}

const ProjectCard = ({
  src,
  title,
  description,
  i,
  range,
  scrollYProgress: progress,
  targetScale,
}: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <motion.div
      ref={container}
      className={` overflow-hidden   sticky top-0 mx-32 `}
      style={{ scale, top: `calc(-15% + ${i * 25}px` }}
    >
      <div className=" w-4/5 h-fit flex !overflow-hidden items-center mx-auto rounded-[25px] shadow-lg border border-[#2a0e61] bg-black mt-[30vh]">
        <motion.div
          style={{
            scale: imageScale,
          }}
          className="w-fit "
        >
          <Image
            src={src}
            alt={title}
            height={1000}
            width={1000}
            className="w-full  rounded-[25px]"
          />
        </motion.div>
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
