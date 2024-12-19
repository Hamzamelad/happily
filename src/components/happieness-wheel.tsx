"use client";

import { motion } from "motion/react";

const HappienessWheel = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <motion.div
        className="relative z rounded-full w-[65%] bg-slate-800 aspect-square flex justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
      ></motion.div>
      <h1 className="absolute font-bold text-xl">Happieness</h1>
    </div>
  );
};

export default HappienessWheel;
