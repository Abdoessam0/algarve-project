"use client";

import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

type DivProps = PropsWithChildren<MotionProps & HTMLAttributes<HTMLDivElement>>;
type SectionProps = PropsWithChildren<MotionProps & HTMLAttributes<HTMLElement>>;
type MainProps = PropsWithChildren<MotionProps & HTMLAttributes<HTMLElement>>;

const baseMotion: Pick<MotionProps, "initial" | "whileInView" | "transition" | "viewport"> = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

export function RevealDiv({ children, ...props }: DivProps) {
  return (
    <motion.div {...baseMotion} {...props}>
      {children}
    </motion.div>
  );
}

export function RevealSection({ children, ...props }: SectionProps) {
  return (
    <motion.section {...baseMotion} {...props}>
      {children}
    </motion.section>
  );
}

export function RevealMain({ children, ...props }: MainProps) {
  return (
    <motion.main {...baseMotion} {...props}>
      {children}
    </motion.main>
  );
}
