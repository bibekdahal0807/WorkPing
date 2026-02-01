import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClientPing",
  description: "Client progress updates from GitHub",
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
