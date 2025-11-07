import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Murad Khan — IT Solutions Architect & Automation Engineer",
  description:
    "Professional portfolio of Murad Khan, Karachi-based IT solutions expert, full-stack web developer, and automation engineer building resilient digital systems.",
  keywords: [
    "Murad Khan",
    "IT solutions expert",
    "full-stack developer",
    "automation engineer",
    "Karachi",
    "web developer portfolio",
  ],
  authors: [{ name: "Murad Khan" }],
  creator: "Murad Khan",
  metadataBase: new URL("https://agentic-ab9f284e.vercel.app"),
  openGraph: {
    title: "Murad Khan — Building Smarter Systems for the Digital Age",
    description:
      "Discover Murad Khan’s work across enterprise networking, full-stack web systems, and intelligent automations tailored for modern businesses.",
    url: "https://agentic-ab9f284e.vercel.app",
    siteName: "Murad Khan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murad Khan — Building Smarter Systems for the Digital Age",
    description:
      "Karachi-based IT solutions architect & automation engineer delivering modern web and automation systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <div className="noise-texture" />
        {children}
      </body>
    </html>
  );
}
