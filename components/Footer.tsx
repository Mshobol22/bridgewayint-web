import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Pricing", href: "/pricing" },
    { label: "Airport Pickup", href: "/#services" },
    { label: "Housing Support", href: "/#services" },
    { label: "Visa Guidance", href: "/#services" },
    { label: "Orientation Tours", href: "/#services" },
  ],
  company: [
    { label: "Services", href: "/services" },
    { label: "Programs", href: "/programs" },
    { label: "About Us", href: "/about" },
    { label: "Free Consultation", href: "/consultation" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold text-white"
            >
              BridgeWay<span className="text-emerald-400"> International</span>
            </Link>
            <p className="mt-4 max-w-sm text-slate-400">
              Your trusted global gateway to US universities. We provide
              end-to-end support for international students—from airport pickup
              to housing, visa guidance, and orientation.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/5 transition-all hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/5 transition-all hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/5 transition-all hover:bg-white/10"
                aria-label="TikTok"
              >
                <span className="text-xs font-bold">T</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/5 transition-all hover:bg-white/10"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BridgeWay International. All rights
            reserved.
          </p>
          <span className="rounded-full border border-white/[0.08] bg-white/5 px-3 py-1 text-xs text-white/40">
            A Barakah Chaser Platform
          </span>
        </div>
      </div>
    </footer>
  );
}
