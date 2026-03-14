"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Home as HomeIcon,
  FileCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesParallax } from "@/components/ServicesParallax";

const fadeUpVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const FAQ_ITEMS = [
  {
    q: "How early should I book airport pickup?",
    a: "We recommend booking at least 2–3 weeks before your arrival. This gives us time to confirm your flight details and arrange a smooth welcome. Last-minute bookings may be accommodated when possible.",
  },
  {
    q: "Do you help students outside Chicago?",
    a: "Yes. BridgeWay supports international students across multiple US cities. Contact us to confirm availability in your destination city.",
  },
  {
    q: "Can BridgeWay help after I arrive?",
    a: "Absolutely. Our support continues after arrival—from housing and roommate matching to orientation tours and ongoing guidance. We're here for your entire transition.",
  },
];

const SERVICES = [
  {
    id: "airport-pickup",
    title: "Airport Pickup & Welcome Assistance",
    icon: Plane,
    gradient: "from-emerald-500/20 to-violet-500/10",
    whatIncludes: [
      "Personalized meet-and-greet at the airport arrivals area",
      "Luggage assistance and transport to your accommodation",
      "Welcome packet with essential local information",
      "Introduction to your neighborhood and key contacts",
    ],
    whoFor:
      "International students arriving in the US for the first time, or those who want a stress-free, guided arrival experience.",
    howWorks:
      "Book online with your flight details. We confirm your pickup time and assign a dedicated team member. On arrival day, you're met at the airport and escorted to your new home.",
  },
  {
    id: "housing",
    title: "Housing & Roommate Support",
    icon: HomeIcon,
    gradient: "from-emerald-500/20 to-teal-500/10",
    whatIncludes: [
      "Curated listings of safe, student-friendly housing",
      "Roommate matching based on preferences and lifestyle",
      "Virtual and in-person viewings support",
      "Lease review and move-in coordination",
    ],
    whoFor:
      "Students who need help finding affordable, secure housing and compatible roommates before or shortly after arrival.",
    howWorks:
      "Share your budget, location preferences, and lifestyle. We match you with vetted options and roommates. We assist with viewings, lease signing, and move-in logistics.",
  },
  {
    id: "visa",
    title: "Visa & Application Guidance",
    icon: FileCheck,
    gradient: "from-violet-500/20 to-purple-500/10",
    whatIncludes: [
      "Step-by-step visa application support",
      "Document preparation and checklist review",
      "University application assistance",
      "Interview preparation and timeline planning",
    ],
    whoFor:
      "Prospective students navigating F-1 visas, university applications, and the documentation required for US study.",
    howWorks:
      "We walk you through each stage—from gathering documents to submitting applications. Our team reviews your materials and helps you stay on track with deadlines.",
  },
  {
    id: "orientation-tours",
    title: "City & Campus Orientation Tours",
    icon: MapPin,
    gradient: "from-amber-500/20 to-orange-500/10",
    whatIncludes: [
      "Guided campus tours and key facility introductions",
      "City orientation: transit, banks, groceries, and essentials",
      "Cultural and social integration tips",
      "Connections to student communities and events",
    ],
    whoFor:
      "New arrivals who want to quickly feel at home in their city and on campus.",
    howWorks:
      "We schedule personalized tours based on your schedule. You'll visit campus, learn local transit, and discover essential spots—all with a knowledgeable guide.",
  },
];

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const pathname = usePathname();

  // Scroll to hash on load (fixes Learn more links from homepage)
  useEffect(() => {
    const scrollToHash = () => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      if (hash) {
        const id = hash.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
      }
      return false;
    };

    if (scrollToHash()) return;
    // Retry after a short delay in case DOM isn't ready yet
    const timer = setTimeout(scrollToHash, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <ServicesParallax>
        <main className="min-h-screen pt-24">
          {/* Hero - centered over parallax */}
          <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
                Our Services
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 drop-shadow-sm">
                End-to-end support for international students—from arrival to
                orientation. Everything you need to succeed in the US.
              </p>
            </motion.div>
          </section>

          {/* Service Sections - backdrop for readability */}
          <section className="relative px-6 py-16">
            <div className="absolute inset-0 bg-slate-950/75" />
            <div className="relative mx-auto max-w-6xl space-y-24">
            {SERVICES.map((service, i) => {
              const IconComponent = service.icon;
              const isReversed = i % 2 === 1;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUpVariants}
                  className={`flex flex-col gap-12 md:flex-row md:items-center md:gap-16 ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-emerald-400`}
                    >
                      <IconComponent className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                      {service.title}
                    </h2>

                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                          What This Service Includes
                        </h3>
                        <ul className="mt-2 space-y-2 text-slate-400">
                          {service.whatIncludes.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-emerald-500">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                          Who This Service Is For
                        </h3>
                        <p className="mt-2 text-slate-400">
                          {service.whoFor}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                          How It Works
                        </h3>
                        <p className="mt-2 text-slate-400">{service.howWorks}</p>
                      </div>
                    </div>

                    <Link
                      href="/consultation"
                      className="mt-8 inline-block rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40"
                    >
                      Request Consultation
                    </Link>
                  </div>

                  <div
                    className={`flex flex-1 justify-center ${isReversed ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <div
                      className={`flex h-48 w-48 items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm md:h-56 md:w-56`}
                    >
                      <IconComponent
                        className="h-24 w-24 text-emerald-500/40 md:h-28 md:w-28"
                        strokeWidth={1}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </section>

          {/* Testimonials - with backdrop */}
          <section className="relative px-6 py-24">
            <div className="absolute inset-0 bg-slate-950/80" />
            <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mx-auto max-w-3xl rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur-xl md:p-12"
          >
            <blockquote className="text-xl leading-relaxed text-slate-300 md:text-2xl">
              &ldquo;BridgeWay helped me find housing before I arrived and
              picked me up from the airport. The transition was very smooth.&rdquo;
            </blockquote>
            <cite className="mt-6 block text-emerald-400 not-italic">
              — International Student
            </cite>
            <Link
              href="/consultation"
              className="mt-8 inline-block rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400"
            >
              Request Consultation
            </Link>
          </motion.div>
            </div>
          </section>

          {/* FAQ - with backdrop */}
          <section className="relative px-6 py-24">
            <div className="absolute inset-0 bg-slate-950/80" />
            <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-12 text-3xl font-bold text-white">
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
            <Link
              href="/consultation"
              className="mt-12 inline-block rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400"
            >
              Request Consultation
            </Link>
          </motion.div>
            </div>
          </section>

          {/* CTA - with backdrop */}
          <section className="relative px-6 py-24">
            <div className="absolute inset-0 bg-slate-950/85" />
            <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl rounded-3xl border border-slate-700/50 bg-slate-900/50 p-12 text-center backdrop-blur-xl md:p-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Request a consultation and let us help you with airport pickup,
              housing, visa guidance, and orientation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="rounded-full bg-emerald-500 px-8 py-3.5 font-semibold text-white transition-all hover:bg-emerald-400"
              >
                Request Consultation
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full glass px-8 py-3.5 font-medium text-slate-200 transition-all hover:bg-slate-800/50"
              >
                Go to Dashboard
              </Link>
            </div>
          </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </ServicesParallax>
    </>
  );
}
