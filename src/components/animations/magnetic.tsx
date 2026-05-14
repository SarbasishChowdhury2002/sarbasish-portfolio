"use client";

import { motion } from "framer-motion";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
};

export function Magnetic({
  children,
  className,
}: MagneticProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}