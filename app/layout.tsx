import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WorkPing",
  description: "Turn real GitHub commits and merged PRs into clean, client-ready progress updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
