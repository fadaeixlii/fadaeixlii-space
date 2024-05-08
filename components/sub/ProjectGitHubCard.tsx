"use client";

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React from "react";
import { RxStarFilled } from "react-icons/rx";

export interface GitHubProjectProps {
  name: string;
  description: string;
  svn_url: string;
  stargazers_count: string;
  languages_url: string;
  pushed_at: string;
  forks: string;
}

const ProjectGitHubCard = (props: GitHubProjectProps) => {
  const { name, description, svn_url, stargazers_count, pushed_at } = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  return (
    <motion.div
      className="bg-[#191919]/70 rounded-lg shadow-md p-6 w-2/5 aspect-[20/9] m-4 relative flex justify-center items-center"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div
        className=" p-5 absolute inset-4 rounded-lg bg-[#171717]/50 border border-[#9979f7]/30 shadow-lg flex flex-col justify-between items-start"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(45px) ",
        }}
      >
        <h2
          className="text-xl font-semibold mb-2 text-[#9979f7] "
          style={{
            transform: "translateZ(45px)",
          }}
        >
          {name}
        </h2>
        <p
          className="text-gray-200 mb-4"
          style={{
            transform: "translateZ(45px)",
          }}
        >
          {description}
        </p>
        <div
          className="flex items-center justify-between mb-4 w-full"
          style={{
            transform: "translateZ(45px)",
          }}
        >
          <a
            href={svn_url}
            className="text-[#9979f7] cursor-pointer hover:underline"
          >
            View on GitHub
          </a>
          <div className="flex items-center gap-2">
            <RxStarFilled className="text-yellow-500" />
            <span className="text-gray-200">{stargazers_count}</span>
          </div>
        </div>
        <div
          className="text-gray-200 text-sm"
          style={{
            transform: "translateZ(45px)",
          }}
        >
          Last updated: {new Date(pushed_at).toLocaleDateString()}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectGitHubCard;
