"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Check } from "lucide-react";
import { Footer } from "@/components/Footer";

const PROGRAM_OPTIONS = [
  "Undergraduate / Associate Degree",
  "Bachelor's Degree",
  "Master's Degree (MBA)",
  "Master's Degree (MS / MA)",
  "Not sure yet",
] as const;

const SERVICE_OPTIONS = [
  "Visa & Application Guidance",
  "Airport Pickup & Welcome",
  "Housing & Roommate Support",
  "City & Campus Orientation",
  "Full Journey Package (All Services)",
] as const;

const START_DATE_OPTIONS = [
  "Fall 2025 (August – September)",
  "Spring 2026 (January – February)",
  "Fall 2026 (August – September)",
  "Spring 2027 (January – February)",
  "I'm flexible / Not sure yet",
] as const;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  programInterest: string;
  serviceNeeded: string;
  preferredStartDate: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  programInterest: "",
  serviceNeeded: "",
  preferredStartDate: "",
  additionalInfo: "",
};

const fadeUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        program: formData.programInterest,
        service: formData.serviceNeeded,
        startDate: formData.preferredStartDate,
        message: formData.additionalInfo || undefined,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#030712]">
        {/* Background decorations - pointer-events-none */}
        <div className="pointer-events-none absolute inset-0">
          {/* Blue radial glow top-left */}
          <div
            className="absolute -top-40 -left-40 h-80 w-80 rounded-full opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
            }}
          />
          {/* Indigo glow bottom-right */}
          <div
            className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
            }}
          />
          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[60vh] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20"
                >
                  <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Request Received!
                </h2>
                <p className="mt-2 text-lg text-slate-300">
                  Thank you, {formData.fullName.split(" ")[0]}.
                </p>
                <p className="mt-1 text-slate-400">
                  Our team will reach out within 24–48 hours.
                </p>
                <Link
                  href="/"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-all hover:bg-slate-100"
                >
                  Return Home
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial="hidden"
                animate="visible"
                variants={{}}
                className="grid gap-10 lg:grid-cols-5"
              >
                {/* Form column */}
                <div className="space-y-10 lg:col-span-3">
                {/* Header */}
                <header className="space-y-6">
                  <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                    </span>
                    <span className="text-sm font-medium text-blue-400">
                      Free Consultation
                    </span>
                  </motion.div>
                  <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl font-bold text-white sm:text-5xl"
                  >
                    Start Your Journey
                  </motion.h1>
                  <motion.p
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-slate-400"
                  >
                    Fill out the form below and a BridgeWay advisor will reach out
                    within 24–48 hours.
                  </motion.p>
                </header>

                <hr className="border-white/8 mb-8" />

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-10"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                  custom={4}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Amara Okonkwo"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/60 focus:bg-blue-950/20 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/60 focus:bg-blue-950/20 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Phone / WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/60 focus:bg-blue-950/20 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="mb-2 block text-sm font-medium text-slate-300"
                      >
                        Country of Origin <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        placeholder="e.g. Nigeria"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/60 focus:bg-blue-950/20 focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="programInterest"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Program Interest <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="programInterest"
                      name="programInterest"
                      required
                      value={formData.programInterest}
                      onChange={handleChange}
                      className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm appearance-none cursor-pointer [&>option]:bg-[#0f172a] [&>option]:text-white"
                    >
                      <option value="">Select program...</option>
                      {PROGRAM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="serviceNeeded"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Service Needed <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      required
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm appearance-none cursor-pointer [&>option]:bg-[#0f172a] [&>option]:text-white"
                    >
                      <option value="">Select service...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredStartDate"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Preferred Start Date <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="preferredStartDate"
                      name="preferredStartDate"
                      required
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                      className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-all text-sm appearance-none cursor-pointer [&>option]:bg-[#0f172a] [&>option]:text-white"
                    >
                      <option value="">Select start date...</option>
                      {START_DATE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="additionalInfo"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Additional Information{" "}
                      <span className="text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      placeholder="Tell us anything else about your situation, goals, or questions..."
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/60 focus:bg-blue-950/20 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition-all hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending your request...
                        </>
                      ) : (
                        <>
                          Request Free Consultation
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      By submitting, you agree to be contacted by a BridgeWay
                      advisor. No spam, ever.
                    </p>
                    <p className="text-center text-xs text-white/30">
                      🔒 Your information is secure and never shared.
                    </p>
                  </div>
                </motion.form>
                </div>

                {/* Trust panel - visible on lg+ */}
                <motion.aside
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="hidden space-y-6 lg:col-span-2 lg:block"
                >
                  <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-950/40 to-transparent p-6">
                    <h3 className="font-semibold text-white mb-4">
                      Why BridgeWay?
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Free initial consultation — no commitment",
                        "F-1 visa specialists with proven results",
                        "Chicago-based team, available on WhatsApp",
                        "Students from 15+ countries served",
                      ].map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/80"
                        >
                          <span className="mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-green-400/10 p-0.5">
                            <Check className="h-4 w-4 text-green-400" strokeWidth={2.5} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <blockquote className="mt-6 border-l-2 border-blue-500/30 pl-4 italic text-white/70">
                      &ldquo;My advisor walked me through every step. I
                      couldn&apos;t have done it without BridgeWay.&rdquo;
                      <footer className="mt-2 not-italic text-white/50">
                        — Fatima A., Nigeria
                      </footer>
                    </blockquote>
                    <p className="mt-4 text-sm text-white/50">
                      ⚡ Average response time: under 24 hours
                    </p>
                  </div>
                </motion.aside>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </>
  );
}
