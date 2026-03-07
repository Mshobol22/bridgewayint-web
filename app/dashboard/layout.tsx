"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, GraduationCap, Home, FileEdit } from "lucide-react";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/apply", label: "Apply", icon: FileEdit },
  { href: "/programs", label: "Programs", icon: GraduationCap },
  { href: "/", label: "Home", icon: Home },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-[280px] flex-col border-r border-slate-800/50 glass-card">
        <div className="flex h-16 items-center border-b border-slate-800/50 px-6">
          <Link href="/" className="text-lg font-semibold text-white">
            BridgeWay<span className="text-sky-400"> Portal</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive =
              pathname === link.href ||
              (link.href !== "/dashboard" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-sky-500/10 text-sky-400"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-slate-800/50 p-4">
          <div className="flex items-center justify-between rounded-lg glass px-4 py-3">
            <span className="text-sm text-slate-400">Account</span>
            <UserButton />
          </div>
        </div>
      </aside>
      <main className="flex-1 pl-[280px]">{children}</main>
    </div>
  );
}
