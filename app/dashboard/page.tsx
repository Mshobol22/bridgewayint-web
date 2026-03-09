"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserCheck,
  FileUp,
  Building2,
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

type ApplicationStatus =
  | "Profile Completed"
  | "Documents Uploaded"
  | "University Accepted"
  | "Visa Approved";

interface StudentApplication {
  id: string;
  clerk_user_id: string;
  full_name: string;
  country_of_origin: string;
  intended_program: string;
  desired_university: string | null;
  status: ApplicationStatus;
  created_at: string;
}

const STATUS_STEPS: {
  id: string;
  label: string;
  status: ApplicationStatus;
  description: string;
  icon: typeof UserCheck;
}[] = [
  {
    id: "profile",
    label: "Profile Completed",
    status: "Profile Completed",
    description: "Your personal information and academic background",
    icon: UserCheck,
  },
  {
    id: "documents",
    label: "Documents Uploaded",
    status: "Documents Uploaded",
    description: "Transcripts, certificates, and supporting documents",
    icon: FileUp,
  },
  {
    id: "university",
    label: "University Accepted",
    status: "University Accepted",
    description: "Acceptance from your chosen institution",
    icon: Building2,
  },
  {
    id: "visa",
    label: "Visa Approved",
    status: "Visa Approved",
    description: "Final step before your departure",
    icon: CheckCircle2,
  },
];

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function getStepStatus(
  currentStatus: ApplicationStatus,
  stepStatus: ApplicationStatus
): "completed" | "in_progress" | "pending" {
  const order = STATUS_STEPS.map((s) => s.status);
  const currentIndex = order.indexOf(currentStatus);
  const stepIndex = order.indexOf(stepStatus);

  if (stepIndex < currentIndex) return "completed";
  if (stepIndex === currentIndex) return "in_progress";
  return "pending";
}

export default function DashboardPage() {
  const { userId } = useAuth();
  const [application, setApplication] = useState<StudentApplication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const fetchApplication = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from("student_applications")
          .select("*")
          .eq("clerk_user_id", userId)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (fetchError) throw fetchError;
        setApplication(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load application"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplication();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-emerald-400" />
          <p className="text-sm text-slate-400">Loading your application...</p>
        </div>
      </div>
    );
  }

  return (
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

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {!application ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card flex flex-col items-center justify-center rounded-2xl p-16 text-center"
        >
          <h2 className="text-xl font-semibold text-white">
            Start Your Application
          </h2>
          <p className="mt-3 max-w-md text-slate-400">
            Begin your journey to US universities. Complete the intake form to
            track your application status and receive personalized support.
          </p>
          <Link
            href="/dashboard/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 font-medium text-white transition-colors hover:bg-emerald-400"
          >
            Start Your Application
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 glass-card rounded-2xl p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">
              Your Application
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Full Name
                </p>
                <p className="mt-1 text-white">{application.full_name}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Intended Program
                </p>
                <p className="mt-1 text-white">
                  {application.intended_program || "—"}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Country of Origin
                </p>
                <p className="mt-1 text-white">
                  {application.country_of_origin || "—"}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                Application Status
              </h2>
              <Link
                href="/dashboard/apply"
                className="flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Update application
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-700/50" />

              <div className="space-y-0">
                {STATUS_STEPS.map((step) => {
                  const IconComponent = step.icon;
                  const stepStatus = getStepStatus(
                    application.status,
                    step.status
                  );
                  const isCompleted = stepStatus === "completed";
                  const isInProgress = stepStatus === "in_progress";

                  return (
                    <motion.div
                      key={step.id}
                      variants={itemVariants}
                      className="relative flex gap-6 pb-8 last:pb-0"
                    >
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-600 bg-slate-950">
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : isInProgress ? (
                          <Clock className="h-5 w-5 animate-pulse text-emerald-400" />
                        ) : (
                          <Circle className="h-4 w-4 text-slate-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="glass-card rounded-xl p-5">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                isCompleted
                                  ? "bg-emerald-500/20 text-emerald-400"
                                  : isInProgress
                                    ? "bg-emerald-500/20 text-emerald-400"
                                    : "bg-slate-800/50 text-slate-500"
                              }`}
                            >
                              <IconComponent
                                className="h-5 w-5"
                                strokeWidth={1.5}
                              />
                            </div>
                            <div>
                              <h3
                                className={`font-semibold ${
                                  isCompleted
                                    ? "text-emerald-400"
                                    : isInProgress
                                      ? "text-emerald-400"
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
                                <span className="mt-2 inline-block text-xs text-emerald-400">
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
        </>
      )}
    </div>
  );
}
