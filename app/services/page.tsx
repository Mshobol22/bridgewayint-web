"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Home as HomeIcon,
  FileText,
  Map,
  ChevronDown,
  Check,
  ArrowRight,
} from "lucide-react";
import { Footer } from "@/components/Footer";

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
    icon: FileText,
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
    icon: Map,
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
      <main className="relative min-h-screen bg-[#030712]">
        {/* Dot grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        {/* Blue radial glow top-center */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 bg-blue-600/8 blur-[160px]"
          aria-hidden
        />

        {/* Hero */}
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
              End-to-end support for international students—from arrival to
              orientation. Everything you need to succeed in the US.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className="py-16 border-b border-white/5 last:border-0"
            >
              <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left: Content */}
                  <div>
                    <div className="w-12 h-12 bg-blue-600/15 border border-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">{service.title}</h2>
                    <h3 className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-6">
                      What This Service Includes
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.whatIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                          <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/consultation"
                      className="inline-flex items-center gap-2 bg-white/8 border border-white/12 hover:bg-white/12 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all"
                    >
                      Request Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {/* Right: Who it's for + How it works */}
                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h4 className="font-semibold text-white/90 mb-2 text-sm">Who This Is For</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{service.whoFor}</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <h4 className="font-semibold text-white/90 mb-2 text-sm">How It Works</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{service.howWorks}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Testimonials */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <blockquote className="border-l-2 border-blue-500/50 pl-5 text-xl italic leading-relaxed text-white/60 md:text-2xl">
              &ldquo;BridgeWay helped me find housing before I arrived and
              picked me up from the airport. The transition was very smooth.&rdquo;
            </blockquote>
            <cite className="mt-6 block text-white/50 not-italic">
              — International Student
            </cite>
            <Link
              href="/consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/12"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl">
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
              className="mt-12 inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/12"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center md:p-16">
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
                className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-medium text-slate-200 transition-all hover:bg-white/10"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
