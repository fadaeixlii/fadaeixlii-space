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
      style={{ scale, top: `calc(-19% + ${i * 15}px` }}
    >
      <div className=" w-3/5  flex flex-col !overflow-hidden items-center mx-auto rounded-[25px] shadow-lg border border-[#2a0e61] bg-black mt-[30vh]">
        <motion.div
          style={{
            scale: imageScale,
          }}
          className="w-fit flex items-center justify-center "
        >
          <Image
            src={src}
            alt={title}
            height={1000}
            width={1000}
            className=" w-full "
          />
        </motion.div>
        <div className="relative p-4 text-center cursive">
          <h1 className="text-2xl font-semibold text-white cursive">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
