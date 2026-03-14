"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4"
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between">
        {/* Animated plane - pointer-events-none so it doesn't block nav clicks */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ x: "-10%" }}
            animate={{ x: "110%" }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Plane className="h-5 w-5 text-emerald-400/60" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-white"
          >
            BridgeWay<span className="text-emerald-400"> International</span>
          </Link>
        </div>

        <div className="relative z-10 flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                pathname === link.href ? "text-emerald-400" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500/30"
            >
              Sign In
            </Link>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </nav>
    </motion.header>
  );
}
