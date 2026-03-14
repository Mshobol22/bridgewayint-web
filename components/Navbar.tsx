"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Show, UserButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/60 backdrop-blur-xl"
          : ""
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between">
        <div className="relative z-10">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            BridgeWay{" "}
            <span className="font-normal text-white/60">International</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="relative z-10 hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-4 flex items-center gap-3">
            <Link
              href="/consultation"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Get Started →
            </Link>

            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Sign In
              </Link>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>

        {/* Mobile: hamburger + menu */}
        <div className="relative z-10 flex items-center gap-3 md:hidden">
          <Link
            href="/consultation"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
          >
            Get Started
          </Link>
          <Show when="signed-out">
            <Link
              href="/sign-in"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white"
            >
              Sign In
            </Link>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-2 border-t border-white/10 bg-black/80 px-6 py-4 backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-sm font-medium ${
                    pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
