import type { Metadata } from "next";
import "@/src/styles/globals.scss";

export const metadata: Metadata = {
  title: "Qoves",
  description: "Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed.",
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
