"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Replace with your real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "PLACEHOLDER_NUMBER";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20BridgeWay!%20I'm%20interested%20in%20learning%20more%20about%20your%20student%20support%20services.`;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 relative z-10" fill="white" aria-hidden>
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.023 7.774L0 32l8.467-2.001A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.626 0-5.087-.693-7.217-1.904l-.517-.307-5.027 1.188 1.213-4.896-.336-.533A13.285 13.285 0 012.667 16C2.667 8.821 8.821 2.667 16 2.667S29.333 8.821 29.333 16 23.179 29.333 16 29.333zm7.307-9.893c-.4-.2-2.367-1.167-2.733-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.623-3.213-1.98-1.187-1.057-1.987-2.363-2.22-2.763-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.333-.8-.667-.667-.9-.667h-.767c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.8 4.267 6.8 5.987.95.41 1.692.655 2.27.838.953.303 1.82.26 2.506.158.765-.113 2.367-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipAutoShown, setTooltipAutoShown] = useState(false);

  useEffect(() => {
    if (tooltipAutoShown) return;
    let hideTimer: ReturnType<typeof setTimeout>;
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
      setTooltipAutoShown(true);
      hideTimer = setTimeout(() => setShowTooltip(false), 4000);
    }, 4000);
    return () => {
      clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [tooltipAutoShown]);

  const tooltipVisible = showTooltip || isHovered;

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BridgeWay on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{ scale: 1.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-shadow hover:shadow-xl"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Pulsing ring */}
      <span className="absolute -inset-1 animate-ping rounded-full opacity-75" style={{ backgroundColor: "#25D366" }} />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "#25D366" }}>
        <WhatsAppIcon />
      </span>

      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: tooltipVisible ? 1 : 0,
          y: tooltipVisible ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-lg"
      >
        Chat with us on WhatsApp!
      </motion.span>
    </motion.a>
  );
}
