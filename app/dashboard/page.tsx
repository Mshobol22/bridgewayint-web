"use client";

import { motion } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  UserCheck,
  FileUp,
  Building2,
  CheckCircle2,
  Circle,
  Clock,
  LayoutDashboard,
  GraduationCap,
  Home,
} from "lucide-react";

const applicationSteps = [
  {
    id: "profile",
    label: "Profile Completed",
    description: "Your personal information and academic background",
    status: "completed",
    icon: UserCheck,
  },
  {
    id: "documents",
    label: "Documents Uploaded",
    description: "Transcripts, certificates, and supporting documents",
    status: "completed",
    icon: FileUp,
  },
  {
    id: "university",
    label: "University Accepted",
    description: "Awaiting acceptance from your chosen institution",
    status: "in_progress",
    icon: Building2,
  },
  {
    id: "visa",
    label: "Visa Approved",
    description: "Final step before your departure",
    status: "pending",
    icon: CheckCircle2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 280, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-slate-800/50 glass-card"
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-800/50 px-6">
          <Link href="/" className="text-lg font-semibold text-white">
            BridgeWay<span className="text-sky-400"> Portal</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-sky-500/10 px-4 py-3 text-sky-400"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/programs"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-white"
          >
            <GraduationCap className="h-5 w-5" />
            Programs
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-white"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
        </nav>
        <div className="border-t border-slate-800/50 p-4">
          <div className="flex items-center justify-between rounded-lg glass px-4 py-3">
            <span className="text-sm text-slate-400">Account</span>
            <UserButton />
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 pl-[280px] pt-16">
        <div className="px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Welcome to your BridgeWay Portal
            </h1>
            <p className="mt-2 text-slate-400">
              Track your application progress and stay updated on your journey.
            </p>
          </motion.div>

          {/* Application Status Tracker */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="glass-card rounded-2xl p-8"
          >
            <h2 className="mb-6 text-xl font-semibold text-white">
              Application Status
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-700/50" />

              <div className="space-y-0">
                {applicationSteps.map((step) => {
                  const IconComponent = step.icon;
                  const isCompleted = step.status === "completed";
                  const isInProgress = step.status === "in_progress";

                  return (
                    <motion.div
                      key={step.id}
                      variants={itemVariants}
                      className="relative flex gap-6 pb-8 last:pb-0"
                    >
                      {/* Step indicator */}
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-950">
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : isInProgress ? (
                          <Clock className="h-5 w-5 animate-pulse text-sky-400" />
                        ) : (
                          <Circle className="h-4 w-4 text-slate-400" />
                        )}
                      </div>

                      {/* Step content */}
                      <div className="flex-1">
                        <div className="glass-card rounded-xl p-5">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                isCompleted
                                  ? "bg-emerald-500/20 text-emerald-400"
                                  : isInProgress
                                    ? "bg-sky-500/20 text-sky-400"
                                    : "bg-slate-800/50 text-slate-500"
                              }`}
                            >
                              <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <div>
                              <h3
                                className={`font-semibold ${
                                  isCompleted
                                    ? "text-emerald-400"
                                    : isInProgress
                                      ? "text-sky-400"
                                      : "text-slate-400"
                                }`}
                              >
                                {step.label}
                              </h3>
                              <p className="mt-1 text-sm text-slate-300">
                                {step.description}
                              </p>
                              {isCompleted && (
                                <span className="mt-2 inline-block text-xs text-emerald-500">
                                  Completed
                                </span>
                              )}
                              {isInProgress && (
                                <span className="mt-2 inline-block text-xs text-sky-400">
                                  In progress
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
