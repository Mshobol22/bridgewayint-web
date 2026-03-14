"use client";

import Link from "next/link";
import { GraduationCap, BookOpen, FlaskConical, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    badge: "2-Year Programs",
    title: "Undergraduate",
    subtitle: "Associate Degrees & Community College Pathways",
    description:
      "Build a strong academic foundation with affordable 2-year associate degree programs. Many include guaranteed transfer pathways to top 4-year universities.",
    highlights: ["2-year programs", "Community college pathways", "Transfer options available"],
    href: "/programs/undergraduate",
    color: "blue",
  },
  {
    icon: GraduationCap,
    badge: "4-Year Programs",
    title: "Bachelor's Degree",
    subtitle: "Four-Year Degrees Across All Disciplines",
    description:
      "Earn a fully accredited bachelor's degree from US universities. 120+ credit hours with internship support and post-graduation OPT work authorization.",
    highlights: ["4-year degrees", "120+ credit hours", "Internship support"],
    href: "/programs/bachelors",
    color: "indigo",
  },
  {
    icon: FlaskConical,
    badge: "Graduate Programs",
    title: "Master's Degree",
    subtitle: "MBA, MS, MA & Specialized Professional Degrees",
    description:
      "Advance your career with graduate-level study. MBA, MS, and MA programs with research, thesis, and assistantship options at top US institutions.",
    highlights: ["1–2 year programs", "Research & thesis options", "Career advancement"],
    href: "/programs/masters",
    color: "violet",
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-16 text-center px-6">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-blue-300 text-sm font-medium">Educational Tracks</span>
        </div>
        <h1 className="text-5xl font-bold mb-3 tracking-tight">Programs</h1>
        <p className="text-white/50 text-lg tracking-widest uppercase text-sm">
          Undergrad · Bachelor's · Master's
        </p>
      </section>

      {/* Program Cards */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/8 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/15 border border-blue-500/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-2">
                  {p.badge}
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{p.title}</h2>
                <p className="text-white/45 text-sm mb-4">{p.subtitle}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors mt-auto"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 mb-4">Not sure which program is right for you?</p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
          >
            Request Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
