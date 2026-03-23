"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Upload, User, Globe, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

const PROGRAMS = [
  { value: "bachelors", label: "Bachelor's" },
  { value: "masters", label: "Master's" },
];

const COUNTRIES = [
  { value: "", label: "Select your country" },
  { value: "nigeria", label: "Nigeria" },
  { value: "sudan", label: "Sudan" },
  { value: "brazil", label: "Brazil" },
  { value: "india", label: "India" },
  { value: "uk", label: "United Kingdom" },
  { value: "ethiopia", label: "Ethiopia" },
  { value: "kenya", label: "Kenya" },
  { value: "ghana", label: "Ghana" },
  { value: "pakistan", label: "Pakistan" },
  { value: "china", label: "China" },
  { value: "saudi_arabia", label: "Saudi Arabia" },
];

const STEPS = [
  { id: 1, label: "Personal Info" },
  { id: 2, label: "Program & University" },
  { id: 3, label: "Documents" },
];

const inputClasses =
  "w-full rounded-xl border border-slate-600/50 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/30 focus:shadow-[0_0_20px_rgba(52,211,153,0.15)]";

const selectClasses =
  "w-full rounded-xl border border-slate-600/50 bg-slate-900/50 px-4 py-3 text-white outline-none transition-all duration-200 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/30 focus:shadow-[0_0_20px_rgba(52,211,153,0.15)] [&>option]:bg-slate-900";

const labelClasses = "mb-2 block text-sm font-medium text-slate-300";

export default function ApplyPage() {
  const { userId } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    countryOfOrigin: "",
    program: "",
    university: "",
    passportFile: null as File | null,
    transcriptFile: null as File | null,
  });

  const updateField = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitError(null);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const getCountryLabel = (value: string) =>
    COUNTRIES.find((c) => c.value === value)?.label ?? value;

  const getProgramLabel = (value: string) =>
    PROGRAMS.find((p) => p.value === value)?.label ?? value;

  const handleSubmit = async () => {
    if (!userId) {
      setSubmitError("You must be signed in to submit an application.");
      return;
    }

    if (!formData.fullName.trim()) {
      setSubmitError("Full name is required.");
      return;
    }

    if (!formData.countryOfOrigin) {
      setSubmitError("Country of origin is required.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase.from("student_applications").insert({
        clerk_user_id: userId,
        full_name: formData.fullName.trim(),
        country_of_origin: getCountryLabel(formData.countryOfOrigin),
        intended_program: getProgramLabel(formData.program) || formData.program,
        desired_university: formData.university.trim() || null,
        status: "Profile Completed",
      });

      if (error) {
        throw error;
      }

      router.push("/dashboard");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to submit application. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <Link
          href="/dashboard"
          className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Application Intake
        </h1>
        <p className="mt-2 text-slate-400">
          Complete your application to begin your journey.
        </p>
      </motion.div>

      {/* Step indicator */}
      <div className="mb-10 flex gap-4">
        {STEPS.map((s) => (
          <div
            key={s.id}
            className={`flex items-center gap-2 ${
              step >= s.id ? "text-emerald-400" : "text-slate-500"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= s.id
                  ? "bg-emerald-500/20 ring-2 ring-emerald-500/40"
                  : "bg-slate-800/50"
              }`}
            >
              {s.id}
            </div>
            <span className="text-sm font-medium">{s.label}</span>
            {s.id < 3 && (
              <div className="ml-2 h-px w-8 bg-slate-600" />
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-card max-w-2xl rounded-2xl p-8"
      >
        {submitError && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {submitError}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">
              Personal Information
            </h2>
            <div>
              <label htmlFor="fullName" className={labelClasses}>
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full legal name"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className={`${inputClasses} pl-12`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="countryOfOrigin" className={labelClasses}>
                Country of Origin <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                <select
                  id="countryOfOrigin"
                  value={formData.countryOfOrigin}
                  onChange={(e) =>
                    updateField("countryOfOrigin", e.target.value)
                  }
                  required
                  className={`${selectClasses} pl-12`}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.value || "empty"} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">
              Program & University
            </h2>
            <div>
              <label htmlFor="program" className={labelClasses}>
                Intended Program
              </label>
              <select
                id="program"
                value={formData.program}
                onChange={(e) => updateField("program", e.target.value)}
                className={selectClasses}
              >
                <option value="">Select your program</option>
                {PROGRAMS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="university" className={labelClasses}>
                Desired University
              </label>
              <input
                id="university"
                type="text"
                placeholder="e.g. University of California, Berkeley"
                value={formData.university}
                onChange={(e) => updateField("university", e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">
              Documents
            </h2>
            <div>
              <label className={labelClasses}>Passport</label>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600/50 bg-slate-900/30 px-6 py-10 transition-all hover:border-emerald-500/40 hover:bg-slate-900/50">
                <Upload className="mb-3 h-10 w-10 text-slate-500" />
                <span className="text-sm text-slate-400">
                  {formData.passportFile
                    ? formData.passportFile.name
                    : "Click to upload passport (mock)"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) =>
                    updateField("passportFile", e.target.files?.[0] ?? null)
                  }
                />
              </label>
            </div>
            <div>
              <label className={labelClasses}>Transcript</label>
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600/50 bg-slate-900/30 px-6 py-10 transition-all hover:border-emerald-500/40 hover:bg-slate-900/50">
                <Upload className="mb-3 h-10 w-10 text-slate-500" />
                <span className="text-sm text-slate-400">
                  {formData.transcriptFile
                    ? formData.transcriptFile.name
                    : "Click to upload transcript (mock)"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) =>
                    updateField("transcriptFile", e.target.files?.[0] ?? null)
                  }
                />
              </label>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 1 || isSubmitting}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${
              step === 1 || isSubmitting
                ? "cursor-not-allowed text-slate-500"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={isSubmitting}
              className="flex items-center gap-2 rounded-xl bg-emerald-500/20 px-5 py-2.5 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/30 disabled:opacity-50"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
