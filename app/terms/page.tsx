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

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
            <p className="mt-2 text-sm text-white/40">Last updated: March 2026</p>
          </header>

          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-8 backdrop-blur-xl">
            <LegalSection title="1. Acceptance">
              <p>
                By using BridgeWay International&apos;s website and services, you
                agree to these terms.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="2. Services">
              <p>
                BridgeWay provides F-1 student support services including visa
                guidance, airport pickup, housing support, and orientation. We
                are not a law firm and do not provide legal immigration advice.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="3. Eligibility">
              <p>
                Services are for individuals 16 years and older. Students under
                18 require parental or guardian consent.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="4. Payments & Deposits">
              <p>
                Fees are outlined in your service agreement. Deposits are
                required to confirm bookings. See our{" "}
                <Link
                  href="/refund-policy"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  Refund Policy
                </Link>{" "}
                for cancellation terms.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="5. Client Responsibilities">
              <p>
                You agree to provide accurate information, respond to advisor
                communications in a timely manner, and meet all deadlines
                provided by BridgeWay.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="6. Limitation of Liability">
              <p>
                BridgeWay is not responsible for visa denials, university
                admission decisions, or circumstances beyond our control. Our
                liability is limited to the amount paid for services.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="7. Intellectual Property">
              <p>
                All website content is owned by BridgeWay International /
                Barakah Chaser Platform.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="8. Governing Law">
              <p>
                These terms are governed by the laws of the State of Illinois,
                United States.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="9. Contact">
              <p>
                For legal inquiries, contact us at{" "}
                <a
                  href="mailto:legal@bridgewayinternational.com"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  legal@bridgewayinternational.com
                </a>
                .
              </p>
            </LegalSection>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6 backdrop-blur-xl">
            <p className="text-center text-slate-300">
              Questions about these terms?{" "}
              <a
                href="mailto:legal@bridgewayinternational.com"
                className="inline-flex rounded-lg bg-emerald-500/20 px-4 py-2 font-medium text-emerald-400 transition-colors hover:bg-emerald-500/30"
              >
                Contact us at legal@bridgewayinternational.com
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
