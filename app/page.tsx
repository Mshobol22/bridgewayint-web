"use client";

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

const services = [
  {
    title: "Airport Pickup & Welcome Assistance",
    description:
      "Warm welcome at arrival. We meet you at the airport, assist with luggage, and ensure a smooth transition to your new home with personalized support.",
    icon: Plane,
    size: "default",
    gradient: "from-sky-500/20 to-cyan-500/10",
  },
  {
    title: "Housing & Roommate Support",
    description:
      "Find safe, affordable housing and compatible roommates. We handle listings, viewings, and introductions so you can focus on your studies.",
    icon: HomeIcon,
    size: "wide",
    gradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Visa & Application Guidance",
    description:
      "Expert support through visa applications, document preparation, and university admissions. We guide you every step of the way.",
    icon: FileCheck,
    size: "tall",
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    title: "On-Orientation Tours",
    description:
      "Explore your new city with guided tours. Campus visits, local culture, essential spots, and everything you need to feel at home.",
    icon: MapPin,
    size: "default",
    gradient: "from-amber-500/20 to-orange-500/10",
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
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your Global Gateway to US Universities —{" "}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                From Anywhere in the World
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
            >
              Premium support for international students worldwide. Airport pickup,
              housing, visa guidance, and orientation—all in one trusted partner.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/dashboard"
                className="rounded-full bg-sky-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-500/40 hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/#services"
                className="rounded-full glass px-8 py-3.5 font-medium text-slate-200 transition-all hover:bg-slate-800/50"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Grid Services Section */}
        <section id="services" className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
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
                    className={`group glass-card flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-slate-600/30 hover:shadow-xl hover:shadow-sky-500/5 ${
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500/20">
                        <IconComponent className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative px-6 py-24">
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
            <Link
              href="/dashboard"
              className="mt-8 inline-flex rounded-full bg-sky-500 px-8 py-3.5 font-semibold text-white transition-all hover:bg-sky-400"
            >
              Get Started
            </Link>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
