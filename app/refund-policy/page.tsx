import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-white/60 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#030712] pt-16 pb-12">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <header className="mt-8">
            <h1 className="text-3xl font-bold text-white">
              Refund & Cancellation Policy
            </h1>
            <p className="mt-2 text-sm text-white/40">Last updated: March 2026</p>
          </header>

          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-8 backdrop-blur-xl">
            <LegalSection title="1. Overview">
              <p>
                We understand plans change. This policy outlines your options if
                you need to cancel or modify your BridgeWay services.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="2. Cancellation Timeframes">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-white/80">
                    More than 14 days before service start:
                  </strong>{" "}
                  Full refund minus a $50 processing fee
                </li>
                <li>
                  <strong className="text-white/80">
                    7–14 days before service start:
                  </strong>{" "}
                  50% refund
                </li>
                <li>
                  <strong className="text-white/80">
                    Less than 7 days before service start:
                  </strong>{" "}
                  No refund (credit toward future services may be offered at our
                  discretion)
                </li>
                <li>
                  <strong className="text-white/80">
                    No-show (no notice given):
                  </strong>{" "}
                  No refund
                </li>
              </ul>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="3. Visa Denial Exception">
              <p>
                If your F-1 visa is denied, you are eligible for a full refund
                of unused services upon providing official denial documentation.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="4. Service Modifications">
              <p>
                Rescheduling is allowed with 48 hours notice at no charge.
                Changes with less than 48 hours notice may incur a $25
                rescheduling fee.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="5. How to Request">
              <p>
                Email{" "}
                <a
                  href="mailto:refunds@bridgewayinternational.com"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  refunds@bridgewayinternational.com
                </a>{" "}
                with your name, booking reference, and reason. We process refund
                requests within 5–7 business days.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="6. Contact">
              <p>
                For refund inquiries, contact us at{" "}
                <a
                  href="mailto:refunds@bridgewayinternational.com"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  refunds@bridgewayinternational.com
                </a>
                .
              </p>
            </LegalSection>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6 backdrop-blur-xl">
            <p className="text-center text-slate-300">
              Questions about this policy?{" "}
              <a
                href="mailto:refunds@bridgewayinternational.com"
                className="inline-flex rounded-lg bg-emerald-500/20 px-4 py-2 font-medium text-emerald-400 transition-colors hover:bg-emerald-500/30"
              >
                Contact us at refunds@bridgewayinternational.com
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
