"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export type AspectWheelProps = {
  children: ReactNode;
  to: string;
  className?: string;
};

const AspectWheel = ({ children, className, to }: AspectWheelProps) => {
  return (
    <div
      className={"absolute w-48 aspect-square grid grid-cols-1 " + className}
    >
      <motion.div
        className={
          "rounded-full w-full h-full aspect-square col-start-1 row-start-1 bg-slate-700 border-[3px] border-dashed border-red-400"
        }
        animate={{ rotate: 360 }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      ></motion.div>
      <div className="relative col-start-1 row-start-1 w-full h-full flex justify-center items-center">
        <h1 className="">{children}</h1>
      </div>
      <Link
        href={to}
        className="relative col-start-1 row-start-1 w-full h-full bg-transparent"
      ></Link>
    </div>
  );
};

export default AspectWheel;
