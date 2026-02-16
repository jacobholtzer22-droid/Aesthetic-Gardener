import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aesthetic Gardener Demo | Premium Landscaping Holland MI",
  description: "Transform your outdoor space with expert landscaping, lawn care, and hardscaping services. Serving Holland, MI and West Michigan for 21+ years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
