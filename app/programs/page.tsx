"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const programs = [
  {
    title: "Undergraduate",
    description:
      "Associate degrees and foundational programs. Build a strong academic base for your future career with 2-year community college pathways and seamless transfer options.",
    features: ["2-year programs", "Community college pathways", "Transfer options"],
    gradient: "from-emerald-500/20 to-violet-500/10",
    href: "/programs/undergraduate",
    icon: GraduationCap,
  },
  {
    title: "Bachelor's",
    description:
      "Four-year degree programs across diverse disciplines. Accredited universities nationwide with 120+ credit hours and internship support to launch your career.",
    features: ["4-year degrees", "120+ credit hours", "Internship support"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    href: "/programs/bachelors",
    icon: Award,
  },
  {
    title: "Master's",
    description:
      "Graduate programs for advanced study. MBA, MS, MA, and specialized professional degrees with research & thesis options for career advancement.",
    features: ["1–2 year programs", "Research & thesis options", "Career advancement"],
    gradient: "from-violet-500/20 to-purple-500/10",
    href: "/programs/masters",
    icon: BookOpen,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 32, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#030712] pt-16 pb-12">
        {/* Subtle blue radial glow */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] bg-blue-600/8 blur-[140px]"
          aria-hidden
        />

        {/* Hero - single section, no background image */}
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              Educational Tracks
            </motion.div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Programs
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-base">
              Undergrad • Bachelor&apos;s • Master&apos;s
            </p>
          </motion.div>
        </section>

        {/* Program tier cards */}
        <section className="relative px-6 py-16">
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {programs.map((program) => {
                const IconComponent = program.icon;
                return (
                  <motion.div
                    key={program.title}
                    variants={cardVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <Link href={program.href}>
                      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-8 transition-all hover:border-white/20">
                        <div className="relative flex flex-1 flex-col">
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                            <IconComponent className="h-7 w-7" strokeWidth={1.5} />
                          </div>
                          <h2 className="mt-6 text-2xl font-semibold text-white">
                            {program.title}
                          </h2>
                          <p className="mt-4 flex-1 text-slate-400">
                            {program.description}
                          </p>
                          <ul className="mt-6 space-y-2">
                            {program.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center gap-2 text-sm text-emerald-400"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-all group-hover:gap-3 group-hover:text-emerald-300">
                            Learn more
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
