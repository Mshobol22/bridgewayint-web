import Link from "next/link";
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

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#030712] pt-24">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            ← Back to Home
          </Link>

          <header className="mt-8">
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-sm text-white/40">Last updated: March 2026</p>
          </header>

          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-8 backdrop-blur-xl">
            <LegalSection title="1. Introduction">
              <p>
                BridgeWay International (&quot;we&quot;, &quot;us&quot;) is
                committed to protecting your personal information. This policy
                explains what we collect, how we use it, and your rights.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="2. Information We Collect">
              <p>
                We collect: name, email, phone number, country of origin, and
                program interest; usage data such as pages visited and browser
                type; and communications you send us.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="3. How We Use Your Information">
              <p>
                We use your information to respond to consultation requests; to
                match you with appropriate programs and services; to send
                relevant updates (with your consent); and to improve our
                website.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="4. Information Sharing">
              <p>
                We do not sell your personal information. We may share with
                trusted service providers (email systems, CRM) who help us
                operate. We may disclose if required by law.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="5. Data Retention">
              <p>
                We retain your data for as long as needed to provide services or
                as required by law.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="6. Your Rights">
              <p>
                You may request access to, correction of, or deletion of your
                personal data by contacting us at{" "}
                <a
                  href="mailto:privacy@bridgewayinternational.com"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  privacy@bridgewayinternational.com
                </a>
                .
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="7. Cookies">
              <p>
                We use essential cookies for site functionality. You can
                disable cookies in your browser settings.
              </p>
            </LegalSection>

            <div className="border-t border-white/10" />

            <LegalSection title="8. Contact Us">
              <p>
                For privacy-related inquiries, email us at{" "}
                <a
                  href="mailto:privacy@bridgewayinternational.com"
                  className="text-emerald-400 underline hover:text-emerald-300"
                >
                  privacy@bridgewayinternational.com
                </a>
                .
              </p>
            </LegalSection>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6 backdrop-blur-xl">
            <p className="text-center text-slate-300">
              Questions about this policy?{" "}
              <a
                href="mailto:privacy@bridgewayinternational.com"
                className="inline-flex rounded-lg bg-emerald-500/20 px-4 py-2 font-medium text-emerald-400 transition-colors hover:bg-emerald-500/30"
              >
                Contact us at privacy@bridgewayinternational.com
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
