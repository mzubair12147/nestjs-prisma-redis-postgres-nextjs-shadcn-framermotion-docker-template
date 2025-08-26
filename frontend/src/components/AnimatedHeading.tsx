"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="space-y-2"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        🚀 Fullstack Template Ready!
      </motion.h1>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="text-gray-600 text-lg"
      >
        Built with Next.js, NestJS, Prisma, Redis & shadcn/ui
      </motion.p>
    </motion.div>
  );
}
