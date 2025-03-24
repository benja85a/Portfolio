"use client";

import { fadeIn } from "@/utils/motionTransitions";
import { motion } from "framer-motion";
import React from "react";

interface MotionTransitionProps {
  children: React.ReactNode;
  position: "right" | "bottom";
  className?: string;
}

const MotionTransition = ({
  children,
  position,
  className,
}: MotionTransitionProps) => {
  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransition;
