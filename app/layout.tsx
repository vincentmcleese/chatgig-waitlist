import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const suisseIntl = localFont({
  src: [
    {
      path: "../public/fonts/SuisseIntl-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SuisseIntl-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chat Gig - Fiverr for ChatGPT",
  description:
    "Turn your vibe coding, vibe contracting, vibe designing session into detailed briefs for freelancers. Without leaving chatGPT.",
  keywords: [
    "ChatGPT",
    "freelancer",
    "briefs",
    "AI",
    "automation",
    "Fiverr",
    "project management",
  ],
  openGraph: {
    title: "Chat Gig - Fiverr for ChatGPT",
    description:
      "Turn your ChatGPT conversations into professional freelancer briefs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suisseIntl.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
