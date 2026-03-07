"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md">
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex h-20 w-20 items-center justify-center">
          {/* Pulsing glowing orb */}
          <motion.div
            className="absolute h-12 w-12 rounded-full bg-sky-500/40 shadow-[0_0_32px_rgba(56,189,248,0.35)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Spinning ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-sky-500/20 border-t-sky-400/70"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Loading text - slow subtle fade-in */}
        <motion.p
          className="mt-10 text-sm font-medium text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Loading your gateway...
        </motion.p>
      </div>
    </div>
  );
}
