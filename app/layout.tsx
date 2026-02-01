import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "WorkPing",
  description: "Client updates from GitHub activity",
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
