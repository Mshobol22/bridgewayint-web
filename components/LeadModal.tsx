"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SERVICE_OPTIONS = [
  "Airport Pickup",
  "Housing",
  "Visa Guidance",
  "Orientation",
] as const;

export interface LeadFormData {
  fullName: string;
  country: string;
  universityApplyingTo: string;
  expectedArrivalDate: string;
  servicesNeeded: string[];
}

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    country: "",
    universityApplyingTo: "",
    expectedArrivalDate: "",
    servicesNeeded: [],
  });

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Lead form data:", formData);
    setFormData({
      fullName: "",
      country: "",
      universityApplyingTo: "",
      expectedArrivalDate: "",
      servicesNeeded: [],
    });
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 backdrop-blur-md bg-slate-950/60"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-lg max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-700/50 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-white">
              Request a Consultation
            </h2>
            <p className="mb-6 text-slate-400">
              Tell us about your journey and we&apos;ll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, country: e.target.value }))
                  }
                  className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="Ethiopia"
                />
              </div>

              <div>
                <label
                  htmlFor="universityApplyingTo"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  University Applying To
                </label>
                <input
                  id="universityApplyingTo"
                  type="text"
                  required
                  value={formData.universityApplyingTo}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      universityApplyingTo: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                  placeholder="University of Chicago"
                />
              </div>

              <div>
                <label
                  htmlFor="expectedArrivalDate"
                  className="mb-1.5 block text-sm font-medium text-slate-300"
                >
                  Expected Arrival Date
                </label>
                <input
                  id="expectedArrivalDate"
                  type="date"
                  required
                  value={formData.expectedArrivalDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      expectedArrivalDate: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Services Needed
                </label>
                <div className="flex flex-wrap gap-3">
                  {SERVICE_OPTIONS.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-600/50 bg-slate-800/30 px-4 py-2.5 transition-colors has-[:checked]:border-emerald-500/50 has-[:checked]:bg-emerald-500/10"
                    >
                      <input
                        type="checkbox"
                        checked={formData.servicesNeeded.includes(service)}
                        onChange={() => toggleService(service)}
                        className="h-4 w-4 rounded border-slate-500 bg-slate-800 text-emerald-500 focus:ring-emerald-500/50"
                      />
                      <span className="text-sm text-slate-300">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40"
              >
                Request Consultation
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
