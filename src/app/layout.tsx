import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lily Lee | Software Engineer",
  description:
    "Software Engineer – Frontend / Full-Stack focused. React, TypeScript, Node.js, AWS. Building web and mobile platforms with DDD and performance optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
