import Link from "next/link";

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
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-semibold text-white"
            >
              BridgeWay<span className="text-emerald-400"> International</span>
            </Link>
            <p className="mt-4 max-w-md text-slate-400">
              Your trusted global gateway to US universities. We provide
              end-to-end support for international students—from airport pickup
              to housing, visa guidance, and orientation.
            </p>
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
                    className="text-slate-400 transition-colors hover:text-emerald-400"
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
                    className="text-slate-400 transition-colors hover:text-emerald-400"
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
                    className="text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BridgeWay International. All rights
            reserved.
          </p>
          <p className="text-sm text-slate-600">
            A Barakah Chaser Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
