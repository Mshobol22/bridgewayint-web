"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white"
        >
          BridgeWay<span className="text-sky-400"> International</span>
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                pathname === link.href ? "text-sky-400" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="rounded-full bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-400 transition-all hover:bg-sky-500/30"
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
