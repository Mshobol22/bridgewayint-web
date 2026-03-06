"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Bridge scene container */}
        <div className="relative w-64 px-4">
          {/* Horizontal line - the bridge */}
          <div className="h-1 w-full rounded-full bg-gradient-to-r from-slate-600 via-sky-500/60 to-slate-600" />

          {/* Icon sliding across the bridge */}
          <motion.div
            className="absolute -top-5 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 shadow-lg shadow-sky-500/20"
            animate={{
              x: [0, 184],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Navigation className="h-5 w-5" strokeWidth={2} />
          </motion.div>
        </div>

        {/* Loading text */}
        <motion.p
          className="mt-12 text-sm font-medium text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading your gateway...
        </motion.p>
      </div>
    </div>
  );
}
