"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FEATURES = [
  {
    emoji: "📄",
    title: "Application Tracking",
    description:
      "Monitor every step of your F-1 visa and university application in real time.",
  },
  {
    emoji: "📁",
    title: "Document Vault",
    description:
      "Securely upload and store passport, transcripts, financial docs, and more.",
  },
  {
    emoji: "💬",
    title: "Direct Advisor Chat",
    description:
      "Message your assigned BridgeWay advisor anytime, from anywhere.",
  },
  {
    emoji: "🏠",
    title: "Housing Dashboard",
    description:
      "Browse curated housing listings and manage your accommodation preferences.",
  },
] as const;

const fadeUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    setSubmitted(false);

    await new Promise((r) => setTimeout(r, 800));

    setSubmitted(true);
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#030712] pt-24">
        <div className="relative mx-auto max-w-2xl px-6 pb-24">
          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Top Section */}
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
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-sm font-medium text-blue-400">
                Coming Soon
              </span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-900/50 text-5xl backdrop-blur-xl">
                🎓
              </div>
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-4xl font-bold text-white sm:text-5xl"
            >
              Student Portal
              <br />
              <span className="text-white/40">Coming Soon</span>
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-xl text-center text-slate-400"
            >
              We&apos;re building a powerful dashboard where you can track your
              application, upload documents, chat with your advisor, and manage
              your entire journey to the US — all in one place.
            </motion.p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-xl sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-4 text-center text-emerald-400"
                  >
                    You&apos;re on the list! We&apos;ll notify you at launch.
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="h-12 flex-1 rounded-l-xl rounded-r-xl border border-slate-600/50 bg-slate-800/50 px-4 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 sm:rounded-r-none sm:border-r-0"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 rounded-xl bg-blue-500 px-6 font-semibold text-white transition-colors hover:bg-blue-400 disabled:opacity-70 sm:rounded-l-none sm:rounded-r-xl"
                      >
                        {isSubmitting ? "Joining..." : "Notify Me"}
                      </button>
                    </div>
                    <p className="text-center text-xs text-slate-500 sm:text-left">
                      No spam. Just a single email when the portal is ready.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Feature Preview Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.5 },
              },
            }}
            className="mt-16 grid gap-4 sm:grid-cols-2"
          >
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUpVariants}
                custom={i}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16"
          >
            <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-indigo-600/10 p-6 sm:p-8">
              <p className="text-center text-slate-300 sm:text-left">
                Ready to get started? Don&apos;t wait for the portal —
              </p>
              <Link
                href="/consultation"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-400 sm:inline-flex"
              >
                Request a Free Consultation Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
