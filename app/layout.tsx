import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BridgeWay International - Your Gateway to New Beginnings",
  description:
    "From Ethiopia to the USA. Premium international student agency offering airport pickup, housing support, visa guidance, and orientation tours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${inter.variable} relative min-h-screen font-sans antialiased text-slate-100`}
        >
          {/* Fixed full-screen background image */}
          <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=2070')`,
            }}
          />
          {/* Dark translucent overlay */}
          <div className="fixed inset-0 z-[1] bg-black/40" />
          {/* Main content layer */}
          <div className="relative z-10">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
