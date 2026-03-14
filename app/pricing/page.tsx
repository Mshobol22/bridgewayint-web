"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TIERS = [
  {
    id: "visa",
    emoji: "📋",
    name: "Visa Guidance Package",
    badge: "Most Popular for New Students",
    price: "Starting at $299",
    description:
      "Everything you need to navigate the F-1 visa process with confidence.",
    features: [
      "F-1 visa application walkthrough",
      "Document checklist & review",
      "University application assistance (up to 3 schools)",
      "Interview preparation session",
      "Email support for 60 days",
    ],
    highlighted: false,
  },
  {
    id: "arrival",
    emoji: "✈️",
    name: "Arrival & Settlement Package",
    badge: "Best Value",
    price: "Starting at $599",
    description:
      "Land in the US stress-free. We handle your arrival, housing, and first weeks in the city.",
    features: [
      "Everything in Visa Guidance",
      "Airport pickup & welcome",
      "Housing search & roommate matching",
      "Lease review support",
      "City & campus orientation tour",
      "Welcome package with local essentials guide",
      "Phone support for 30 days post-arrival",
    ],
    highlighted: true,
  },
  {
    id: "full",
    emoji: "🎓",
    name: "Full Journey Package",
    badge: "Complete End-to-End",
    price: "Starting at $999",
    description:
      "Total peace of mind from first inquiry to first day of class — and beyond.",
    features: [
      "Everything in Arrival & Settlement",
      "Dedicated personal advisor (one point of contact)",
      "University application assistance (unlimited schools)",
      "Priority response (within 4 hours)",
      "Parent progress updates & communication portal",
      "90-day post-arrival support",
      "Referral bonus: $50 credit per referred friend",
    ],
    highlighted: false,
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Can I upgrade my package later?",
    a: "Yes. You can upgrade at any time and we'll apply what you've already paid toward the new package.",
  },
  {
    q: "When do I pay?",
    a: "A 50% deposit is required to reserve your spot. The remaining balance is due 7 days before your service start date.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, for the Full Journey Package we offer split payments. Contact us to discuss options.",
  },
] as const;

const fadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#030712] pt-24">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          {/* Header */}
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
                ← Back to Home
              </Link>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex rounded-full border border-slate-600/50 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-300"
            >
              Transparent Pricing
            </motion.div>
            <motion.h1
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-white sm:text-5xl"
            >
              Simple, Honest Packages
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-slate-400"
            >
              No hidden fees. Choose the level of support that fits your journey
              — you can always upgrade later.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.3 },
              },
            }}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                variants={fadeUpVariants}
                custom={i}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  tier.highlighted
                    ? "scale-[1.02] border-blue-500/40 bg-slate-900/50 shadow-lg shadow-blue-500/10 backdrop-blur-xl md:scale-105"
                    : "border-slate-700/50 bg-slate-900/30 backdrop-blur-xl hover:border-slate-600/50 hover:shadow-slate-900/50"
                }`}
              >
                {/* Most Recommended ribbon for highlighted tier */}
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-blue-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      Most Recommended
                    </span>
                  </div>
                )}

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-2xl">
                  {tier.emoji}
                </div>
                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {tier.badge}
                </span>
                <h2 className="text-xl font-bold text-white">{tier.name}</h2>
                <p className="mt-2 text-2xl font-bold text-white">{tier.price}</p>
                <p className="mt-2 text-sm text-slate-400">{tier.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-0.5 shrink-0 text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/consultation"
                  className={`mt-8 block w-full rounded-xl py-3.5 text-center font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-blue-500 text-white hover:bg-blue-400"
                      : "bg-emerald-500 text-white hover:bg-emerald-400"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* What's Not Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/20 px-6 py-4 backdrop-blur-sm">
              <p className="text-center text-sm text-slate-400">
                Packages do not include: university tuition fees, visa
                application government fees ($160 SEVIS + DS-160), flight costs,
                or accommodation rent. BridgeWay charges for our support services
                only.
              </p>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === i ? null : i)
                    }
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-white transition-colors hover:bg-slate-800/30"
                  >
                    <span className="font-medium">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${openFaqIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-slate-700/50 px-6 py-4 text-slate-400">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="mb-6 text-slate-400">
              Not sure which package is right for you?
            </p>
            <Link
              href="/consultation"
              className="inline-flex rounded-full bg-white px-8 py-3.5 font-semibold text-slate-900 transition-all hover:bg-slate-100"
            >
              Book a Free 15-Minute Call
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
