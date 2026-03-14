"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-blue-600 py-2 px-4 text-center text-xs text-white">
      <span>
        🎓 Applications now open for Fall 2026 —{" "}
        <Link
          href="/consultation"
          className="font-medium underline transition-opacity hover:opacity-90"
        >
          Book your free consultation →
        </Link>
      </span>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-white/20"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
