"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function UndergraduatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/programs"
                className="text-sm text-slate-400 hover:text-emerald-400"
              >
                ← Back to Programs
              </Link>
              <h1 className="mt-6 font-display text-4xl font-bold text-white">
                Undergraduate Programs
              </h1>
              <p className="mt-4 text-lg text-slate-400">
                Associate degrees and foundational programs. Build a strong
                academic base for your future career with 2-year community
                college pathways and transfer options to four-year institutions.
              </p>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
