"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const STATS = [
  { value: "100+", label: "Students Supported" },
  { value: "15+", label: "Countries Represented" },
  { value: "4", label: "Core Services" },
  { value: "98%", label: "Satisfaction Rate" },
] as const;

const VALUES = [
  {
    emoji: "🤝",
    title: "Student-First",
    description: "Every decision we make puts your success and wellbeing first.",
  },
  {
    emoji: "🌍",
    title: "Global Perspective",
    description: "We understand the unique challenges of crossing borders to study.",
  },
  {
    emoji: "🔒",
    title: "Transparency",
    description: "Clear pricing, honest timelines, and no hidden surprises.",
  },
  {
    emoji: "⚡",
    title: "Speed & Reliability",
    description: "We respond quickly and deliver on our promises.",
  },
] as const;

const fadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i?: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: (i ?? 0) * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#030712] pt-24">
        <div className="relative mx-auto max-w-4xl px-6 pb-24">
          {/* 1. Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{}}
            className="space-y-6"
          >
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex rounded-full border border-slate-600/50 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-300"
            >
              Our Story
            </motion.div>
            <motion.h1
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-white sm:text-5xl"
            >
              Built for Students,
              <br />
              <span className="text-white/40">By People Who&apos;ve Been There</span>
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-slate-400"
            >
              BridgeWay International bridges international students to the US
              education system—removing barriers, providing guidance, and turning
              the dream of studying in America into reality.
            </motion.p>
          </motion.div>

          {/* 2. Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-2xl">
                🎯
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">
                Our Mission
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                To be the most trusted partner for international students
                pursuing higher education in the United States — providing
                end-to-end support that removes barriers, builds confidence, and
                turns the dream of studying in America into a reality.
              </p>
            </div>
          </motion.div>

          {/* 3. Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUpVariants}
                custom={i}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 text-center backdrop-blur-xl"
              >
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 4. Our Story */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <div className="mt-6 space-y-4 text-slate-400 leading-relaxed">
              <p>
                Navigating visas, university applications, housing, and a new
                country alone is overwhelming. International students often face
                confusing processes, language barriers, and the stress of
                building a new life far from home—without a trusted guide.
              </p>
              <p>
                BridgeWay exists to change that. We provide end-to-end support
                from your first consultation to your first day on campus. Our
                team understands what it takes to succeed as an international
                student because many of us have walked that path ourselves.
              </p>
              <p>
                We operate under the Barakah Chaser Platform, a mission-driven
                organization committed to helping students achieve their
                educational goals. Based in the Chicago area, we serve students
                from Africa, the Middle East, Asia, and beyond—offering
                personalized guidance every step of the way.
              </p>
            </div>
          </motion.section>

          {/* 5. Values Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="mt-16 grid gap-4 sm:grid-cols-2"
          >
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUpVariants}
                custom={i}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-xl"
              >
                <span className="text-2xl">{value.emoji}</span>
                <h3 className="mt-3 font-semibold text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* 6. Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white">BridgeWay Team</h2>
              <p className="mt-2 text-lg text-slate-300">
                Student Success Advisors
              </p>
              <p className="mt-4 text-slate-400">
                Our advisors bring firsthand F-1 experience and deep knowledge of
                US universities. We&apos;ve been through the process ourselves
                and know how to help you avoid pitfalls and succeed.
              </p>
              <p className="mt-6 text-sm italic text-slate-500">
                Full team page coming soon.
              </p>
            </div>
          </motion.div>

          {/* 7. CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 p-8 backdrop-blur-xl sm:p-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Start Your Journey?
              </h2>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-900 transition-all hover:bg-slate-100"
                >
                  Request Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-slate-600/50 bg-transparent px-6 py-3.5 font-medium text-slate-200 transition-colors hover:bg-slate-800/50"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
