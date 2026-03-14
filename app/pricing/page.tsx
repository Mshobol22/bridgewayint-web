"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Plane,
  GraduationCap,
  Check,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const TIERS = [
  {
    id: "visa",
    icon: FileText,
    name: "Visa Guidance Package",
    badge: "Pre-Arrival",
    price: "$299",
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
    icon: Plane,
    name: "Arrival & Settlement Package",
    badge: "Arrival",
    price: "$599",
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
    icon: GraduationCap,
    name: "Full Journey Package",
    badge: "Complete End-to-End",
    price: "$999",
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
      <div className="relative min-h-screen bg-[#030712]">
        <div className="relative mx-auto max-w-6xl px-6 pb-24">
          {/* Radial glow top-center */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-blue-600/8 blur-[120px]"
            aria-hidden
          />

          {/* Header - center-aligned */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{}}
            className="relative z-10 mx-auto max-w-3xl space-y-6 text-center"
          >
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
                <Sparkles className="h-4 w-4" />
                Transparent Pricing
              </span>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-white sm:text-5xl"
            >
              Simple, Honest Packages
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-2xl text-white/55"
            >
              No hidden fees. Choose the level of support that fits your journey
              — you can always upgrade later.
            </motion.p>
          </motion.div>

          {/* Pill Toggle */}
          <div className="relative z-10 flex justify-center mt-10">
            <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 mb-10">
              <button type="button" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold">
                Packages
              </button>
              <button type="button" className="px-5 py-2 rounded-full text-white/50 text-sm font-medium hover:text-white transition-colors">
                Per Service
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.3 },
              },
            }}
            className="relative z-10 mt-16 grid gap-6 md:grid-cols-3"
          >
            {TIERS.map((tier, i) => {
              const IconComponent = tier.icon;
              const isHighlighted = tier.highlighted;
              return (
                <motion.div
                  key={tier.id}
                  variants={fadeUpVariants}
                  custom={i}
                  className={`relative flex min-h-[580px] flex-col rounded-2xl p-8 transition-all duration-300 ${
                    isHighlighted
                      ? "scale-[1.02] border-2 border-blue-500/50 bg-gradient-to-b from-blue-950/60 to-[#030712] shadow-[0_0_60px_rgba(59,130,246,0.12)]"
                      : "border border-white/[0.08] bg-white/[0.03]"
                  }`}
                >
                  {/* Top: badge + Most Recommended */}
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                      {tier.badge}
                    </span>
                    {isHighlighted && (
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                        Most Recommended
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                      isHighlighted
                        ? "border-blue-500/30 bg-blue-600/20"
                        : "border-white/[0.08] bg-white/[0.03]"
                    }`}
                  >
                    <IconComponent
                      className={`h-6 w-6 ${isHighlighted ? "text-blue-400" : "text-white/70"}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Price */}
                  <p className="text-sm text-white/40">Starting at</p>
                  <p className="text-4xl font-bold text-white">{tier.price}</p>

                  {/* Description */}
                  <p className="mb-6 mt-2 text-sm text-white/55">
                    {tier.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 border-t border-white/[0.08]" />

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 p-0.5">
                          <Check className="h-3 w-3 text-green-400" strokeWidth={2.5} />
                        </span>
                        <span className="text-sm text-white/75">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/consultation"
                    className={`mt-auto block w-full rounded-xl py-3 text-center font-semibold transition-all ${
                      isHighlighted
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-white/15 text-white hover:bg-white/5"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trusted by students from */}
          <div className="relative z-10 mt-16">
            <p className="text-center text-white/40 text-sm mb-4">Trusted by students from</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl mx-auto">
              {[
                { country: "Nigeria", code: "NG" },
                { country: "Saudi Arabia", code: "SA" },
                { country: "Ghana", code: "GH" },
                { country: "India", code: "IN" },
                { country: "Pakistan", code: "PK" },
                { country: "Kenya", code: "KE" },
              ].map(({ country, code }) => (
                <div
                  key={country}
                  className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-center hover:bg-white/8 hover:border-white/20 transition-all"
                >
                  <div className="text-xs font-bold text-white/30 mb-1">{code}</div>
                  <div className="text-white/70 text-sm font-medium">{country}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Not Included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mt-16"
          >
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-4">
              <p className="text-center text-sm text-white/55">
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
            className="relative z-10 mt-16"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-white/[0.08] py-5"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === i ? null : i)
                    }
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                  >
                    <span className="font-medium text-white">{item.q}</span>
                    <span className="shrink-0 text-white/40">
                      {openFaqIndex === i ? (
                        <Minus className="h-5 w-5" strokeWidth={1.5} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm leading-relaxed text-white/55">
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
            className="relative z-10 mt-16"
          >
            <div className="mx-auto mb-16 max-w-2xl rounded-2xl border border-white/[0.08] bg-white/[0.03] p-10 text-center">
              <p className="mb-6 text-white/70">
                Not sure which package is right for you?
              </p>
              <Link
                href="/consultation"
                className="inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-white/90"
              >
                Book a Free 15-Minute Call
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
