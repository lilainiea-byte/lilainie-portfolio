"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollScaleProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollScale({ children, className }: ScrollScaleProps) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [0.6, 1]);

  return (
    <motion.div
      style={{ scale, transformOrigin: "left top" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
