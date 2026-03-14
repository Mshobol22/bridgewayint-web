"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

const HIGHLIGHTS = [
  {
    emoji: "📋",
    title: "Program Types",
    description:
      "MBA, MS (Science/Engineering/Tech), MA (Arts/Humanities), specialized professional degrees",
  },
  {
    emoji: "🔬",
    title: "Research & Thesis Options",
    description:
      "Many programs offer thesis tracks or research assistantships (RA/TA) with funding opportunities",
  },
  {
    emoji: "💼",
    title: "CPT & OPT Work Authorization",
    description:
      "Internships during study; up to 3 years OPT after graduation for STEM fields",
  },
  {
    emoji: "📈",
    title: "Career Advancement",
    description:
      "Graduate credentials for higher salaries and specialized roles in the US and globally",
  },
] as const;

const ELIGIBILITY = [
  "Bachelor's degree from accredited institution",
  "English proficiency (TOEFL iBT 90+ or IELTS 7.0+ — varies by school)",
  "GRE or GMAT may be required (varies by program)",
  "Valid passport",
  "Financial proof (typically $30,000–$75,000/year for tuition + living)",
  "No prior US visa violations",
] as const;

const TIMELINE = [
  {
    step: 1,
    when: "12–18 months before",
    title: "Initial consultation & program selection",
  },
  {
    step: 2,
    when: "9–12 months before",
    title: "GRE/GMAT preparation (if required) & application submission",
  },
  {
    step: 3,
    when: "6–12 months before",
    title: "Acceptance letter received, I-20 issued",
  },
  {
    step: 4,
    when: "4–6 months before",
    title: "SEVIS fee payment & DS-160 visa application",
  },
  {
    step: 5,
    when: "2–4 months before",
    title: "F-1 visa interview at US Embassy",
  },
  {
    step: 6,
    when: "1 month before",
    title: "Pre-departure orientation with BridgeWay",
  },
  {
    step: 7,
    when: "Arrival",
    title: "BridgeWay airport pickup & settlement support",
  },
] as const;

const COSTS = [
  {
    label: "Graduate Tuition (varies by program)",
    value: "$20,000–$60,000/year",
  },
  {
    label: "Living Expenses",
    value: "$10,000–$18,000/year",
  },
  {
    label: "BridgeWay Services",
    value: "Starting at $299",
  },
  {
    label: "Total Estimated First Year",
    value: "$30,000–$75,000",
  },
] as const;

const fadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i?: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: (i ?? 0) * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MastersPage() {
  return (
    <>
      <div className="min-h-screen bg-[#030712]">
        <div className="mx-auto max-w-4xl px-6 pb-24">
          {/* Hero */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={{}}
            className="space-y-6"
          >
            <motion.div variants={fadeUpVariants} initial="hidden" animate="visible">
              <Link
                href="/programs"
                className="inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Programs
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-flex rounded-full border border-slate-600/50 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-300"
            >
              Graduate Programs
            </motion.div>
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-4xl font-bold text-white sm:text-5xl"
            >
              Master&apos;s Programs
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg text-white/60"
            >
              MBA, MS, MA & Professional Degrees
            </motion.p>
          </motion.section>

          {/* Section 1 — Overview */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="mt-4 leading-relaxed text-white/60">
              BridgeWay supports international F-1 students pursuing 1–2 year
              master&apos;s degrees at accredited US universities. Programs
              include MBA, MS (Science/Engineering/Tech), MA (Arts/Humanities),
              and specialized professional degrees. Many programs offer graduate
              assistantships (RA/TA) and scholarships that can significantly
              reduce costs — we help you identify and apply for these
              opportunities.
            </p>
          </motion.section>

          {/* Section 2 — Program Highlights */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="mt-16"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">
              Program Highlights
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUpVariants}
                  custom={i}
                  className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-xl"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Section 3 — Eligibility */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">
              Eligibility Requirements
            </h2>
            <ul className="space-y-3">
              {ELIGIBILITY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-900/30 px-4 py-3"
                >
                  <span className="mt-0.5 shrink-0 text-green-400">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Section 4 — Application Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">
              Application Timeline
            </h2>
            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-600/50" />
              {TIMELINE.map((item) => (
                <div key={item.step} className="relative pb-8 last:pb-0">
                  <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-emerald-500/50 bg-slate-900 text-sm font-semibold text-emerald-400">
                    {item.step}
                  </div>
                  <div className="rounded-xl border border-slate-700/50 bg-slate-900/30 p-4">
                    <p className="text-xs font-medium text-emerald-400">
                      {item.when}
                    </p>
                    <p className="mt-1 font-medium text-white">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 5 — Tuition Ranges */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">
              Tuition Ranges
            </h2>
            <div className="space-y-3">
              {COSTS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-900/30 px-4 py-3"
                >
                  <span className="text-white/80">{row.label}</span>
                  <span className="font-medium text-white">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/50">
              Exact costs vary by program and institution. Graduate assistantships
              (RA/TA) and scholarships can significantly reduce costs — contact
              us to learn about funding opportunities.
            </p>
          </motion.section>

          {/* Section 6 — CTA */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 text-center backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white">
                Ready to start your master&apos;s journey in the US?
              </h2>
              <Link
                href="/consultation"
                className="mt-6 inline-flex rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-white transition-all hover:bg-emerald-400"
              >
                Request Free Consultation
              </Link>
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>
    </>
  );
}
