import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | BridgeWay International",
  description:
    "Airport pickup, housing support, visa guidance, and orientation tours for international students. End-to-end support for your US university journey.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
