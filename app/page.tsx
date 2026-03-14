"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Home as HomeIcon,
  FileText,
  Map,
  ArrowRight,
  PhoneCall,
  Package,
  GraduationCap,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";

const services = [
  {
    title: "Airport Pickup & Welcome Assistance",
    description:
      "We meet you at the airport, assist with luggage, and ensure a smooth transition to your new home.",
    icon: Plane,
    servicesLink: "/services#airport-pickup",
  },
  {
    title: "Housing & Roommate Support",
    description:
      "Find safe, affordable housing and compatible roommates. We handle listings and introductions.",
    icon: HomeIcon,
    servicesLink: "/services#housing",
  },
  {
    title: "Visa & Application Guidance",
    description:
      "Expert support through visa applications, document preparation, and university admissions.",
    icon: FileText,
    servicesLink: "/services#visa",
  },
  {
    title: "City & Campus Orientation",
    description:
      "Guided tours of campus and city. Transit, banks, groceries, and everything you need to feel at home.",
    icon: Map,
    servicesLink: "/services#orientation-tours",
  },
];

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main className="min-h-screen">
        {/* Hero Section - Plane background */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />
          <div
            className="absolute top-0 left-0 h-1/2 w-1/2 opacity-40"
            style={{
              background: "radial-gradient(ellipse 80% 80% at 20% 20%, rgba(30, 58, 138, 0.4) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <div className="flex items-center justify-center gap-6 text-white/45 text-sm mb-6 flex-wrap">
              <span>🌍 Students from 15+ countries</span>
              <span className="text-white/20">·</span>
              <span>📍 Chicago-based team</span>
              <span className="text-white/20">·</span>
              <span>✈️ F-1 visa specialists</span>
            </div>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your Global Gateway to US Universities
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-2xl font-normal text-white/70"
            >
              From Anywhere in the World
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/60 drop-shadow-sm"
            >
              Premium support for international students worldwide. Airport pickup,
              housing, visa guidance, and orientation—all in one trusted partner.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/consultation"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-white/90"
              >
                Request Free Consultation
              </Link>
              <Link
                href="/#services"
                className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Explore Services ↓
              </Link>
            </motion.div>
            <p className="mt-8 text-xs text-white/35">
              Trusted by students from Nigeria, Saudi Arabia, Ghana, India, Pakistan and more
            </p>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-white/8 bg-[#030712] py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { value: "100+", label: "Students Supported" },
                { value: "15+", label: "Countries Served" },
                { value: "98%", label: "Visa Approval Rate" },
                { value: "24h", label: "Average Response Time" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center py-4 px-6 ${i < 3 ? "border-r border-white/8" : ""}`}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className="relative overflow-hidden bg-[#030712] px-6 py-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                WHAT WE DO
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything You Need, In One Place
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                From your visa to your first week on campus — we handle it all.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link
                      href={service.servicesLink}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-600/15 p-2 text-blue-400">
                        <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/55">
                        {service.description}
                      </p>
                      <span className="text-sm text-blue-400 transition-colors group-hover:text-blue-300">
                        Learn more →
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-white/70">Ready to get started?</p>
              <Link
                href="/consultation"
                className="mt-4 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-white/90"
              >
                Request Free Consultation →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section divider */}
        <div className="bg-[#030712]">
          <div className="border-t border-white/5 max-w-xs mx-auto mb-24" />
        </div>

        {/* How It Works Section */}
        <section className="relative overflow-hidden bg-[#030712] px-6 py-16 sm:py-24">
          <div className="relative mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                YOUR JOURNEY
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your Journey, Step by Step
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                From your first message to your first day on campus — we&apos;re
                with you every step.
              </p>
            </motion.div>

            <div className="relative">
              {/* Desktop: horizontal dashed connector */}
              <div
                className="-z-10 absolute left-0 right-0 top-5 hidden border-t-2 border-dashed border-white/10 lg:block"
                aria-hidden
              />
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
                {[
                  {
                    step: 1,
                    icon: PhoneCall,
                    title: "Free Consultation",
                    description:
                      "Tell us about your goals, timeline, and budget. We'll match you with the right program and package.",
                  },
                  {
                    step: 2,
                    icon: FileText,
                    title: "Application Support",
                    description:
                      "We guide you through university applications, document preparation, and F-1 visa filing — nothing falls through the cracks.",
                  },
                  {
                    step: 3,
                    icon: Package,
                    title: "Pre-Departure Prep",
                    description:
                      "Before you fly, we brief you on what to expect: packing, banking, what to bring, and how your arrival day will go.",
                  },
                  {
                    step: 4,
                    icon: HomeIcon,
                    title: "Arrival & Settlement",
                    description:
                      "We meet you at the airport. We get you to your housing. We show you around your new city.",
                  },
                  {
                    step: 5,
                    icon: GraduationCap,
                    title: "Ongoing Support",
                    description:
                      "Your BridgeWay advisor stays reachable after arrival. Questions about campus, banking, transit, or anything else — just ask.",
                  },
                ].map((item, i) => {
                  const StepIcon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="relative flex flex-col items-center"
                    >
                      <div className="relative z-10 mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <StepIcon className="mx-auto mb-2 h-5 w-5 text-blue-400" strokeWidth={1.5} />
                      <h3 className="text-center text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-center text-xs leading-relaxed text-white/50">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative overflow-hidden bg-[#030712] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                TESTIMONIALS
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What Students Are Saying
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Real experiences from students we&apos;ve supported on their
                journey to the US.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    "BridgeWay made my arrival in Chicago so much easier than I expected. They picked me up, helped me get settled, and I never felt alone.",
                  name: "Fatima A.",
                  country: "Nigeria",
                  program: "Bachelor's Degree, Chicago",
                  initials: "FA",
                },
                {
                  quote:
                    "I had no idea how to start the F-1 visa process. My BridgeWay advisor walked me through everything and I got approved on my first try.",
                  name: "Mohamed K.",
                  country: "Saudi Arabia",
                  program: "Master's (MS), Illinois",
                  initials: "MK",
                },
                {
                  quote:
                    "The housing support was incredible. They found me a safe apartment with a great roommate before I even landed in the US.",
                  name: "Amara D.",
                  country: "Ghana",
                  program: "Undergraduate, Community College",
                  initials: "AD",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/15 hover:bg-white/10"
                >
                  <div className="mb-3 text-sm text-yellow-400">★★★★★</div>
                  <p className="mb-5 text-base italic leading-relaxed text-white/75">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/30 text-sm font-bold text-white">
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <span className="flex items-center gap-1.5 text-white/45 text-xs">
                        <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                        {testimonial.country}
                      </span>
                      <p className="text-xs text-blue-400">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-center text-xs text-white/40"
            >
              * Testimonials represent real student experiences. Photos withheld
              by student request.
            </motion.p>
          </div>
        </section>

        {/* Students We Serve - Country Grid */}
        <section className="py-20 px-6 bg-[#030712]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">Our Students Come From</p>
            <h2 className="text-3xl font-bold mb-12 text-white">We Serve Students Worldwide</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
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
            <p className="text-white/30 text-sm mt-6">+ many more countries</p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-[#030712]">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/8 pointer-events-none" />
          <div className="absolute inset-0 border-y border-white/5 pointer-events-none" />

          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Limited spots available for Fall 2026</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
              Your Journey Starts<br />With One Conversation
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Book a free 15-minute call with a BridgeWay advisor. No pressure, no commitment — just clarity on your path to a US university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-all text-base">
                Request Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/5 transition-all text-base">
                View Packages & Pricing
              </Link>
            </div>
            <p className="text-white/25 text-sm mt-6">
              Average response time: under 24 hours · Students from 15+ countries served
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
