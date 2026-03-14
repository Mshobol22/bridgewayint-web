"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plane,
  Home as HomeIcon,
  FileCheck,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";

const services = [
  {
    title: "Airport Pickup & Welcome Assistance",
    description:
      "Warm welcome at arrival. We meet you at the airport, assist with luggage, and ensure a smooth transition to your new home with personalized support.",
    icon: Plane,
    size: "default",
    gradient: "from-emerald-500/20 to-violet-500/10",
    servicesLink: "/services#airport-pickup",
  },
  {
    title: "Housing & Roommate Support",
    description:
      "Find safe, affordable housing and compatible roommates. We handle listings, viewings, and introductions so you can focus on your studies.",
    icon: HomeIcon,
    size: "wide",
    gradient: "from-emerald-500/20 to-teal-500/10",
    servicesLink: "/services#housing",
  },
  {
    title: "Visa & Application Guidance",
    description:
      "Expert support through visa applications, document preparation, and university admissions. We guide you every step of the way.",
    icon: FileCheck,
    size: "tall",
    gradient: "from-violet-500/20 to-purple-500/10",
    servicesLink: "/services#visa",
  },
  {
    title: "On-Orientation Tours",
    description:
      "Explore your new city with guided tours. Campus visits, local culture, essential spots, and everything you need to feel at home.",
    icon: MapPin,
    size: "default",
    gradient: "from-amber-500/20 to-orange-500/10",
    servicesLink: "/services#orientation-tours",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
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
      <Navbar />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <main className="min-h-screen">
        {/* Hero Section - Plane background */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070")`,
            }}
          />
          <div className="absolute inset-0 bg-slate-950/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,211,153,0.1),transparent)]" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your Global Gateway to US Universities —{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                From Anywhere in the World
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 drop-shadow-sm"
            >
              Premium support for international students worldwide. Airport pickup,
              housing, visa guidance, and orientation—all in one trusted partner.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:scale-105"
              >
                Get Started Today
              </button>
              <Link
                href="/#services"
                className="rounded-full glass px-8 py-3.5 font-medium text-slate-200 transition-all hover:bg-slate-800/50"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Grid Services Section - Parallax image as background */}
        <section id="services" className="relative overflow-hidden px-6 py-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/parallax-hero.png")`,
            }}
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/75 to-slate-950/90" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold text-white drop-shadow-md sm:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-200 drop-shadow-sm">
                End-to-end support designed for your success abroad
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
            >
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    className={`group flex flex-col rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-slate-600/30 hover:shadow-xl hover:shadow-emerald-500/5 ${
                      service.size === "wide"
                        ? "md:col-span-2"
                        : service.size === "tall"
                          ? "lg:row-span-2"
                          : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="relative flex flex-1 flex-col">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                        <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-slate-200">
                        {service.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                          href={service.servicesLink}
                          className="text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                          Learn more →
                        </Link>
                        <Link
                          href="/consultation"
                          className="text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                        >
                          Request Consultation
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative overflow-hidden px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl rounded-3xl glass-card p-12 text-center md:p-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Create your account to track your application status and access
              exclusive resources.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="inline-flex rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-white transition-all hover:bg-emerald-400"
              >
                Request Consultation
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex rounded-full glass px-8 py-3.5 font-medium text-slate-200 transition-all hover:bg-slate-800/50"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
