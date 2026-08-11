import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Group of Smart Nirman — Building Nepal's Future",
  description:
    "16 specialized companies. 7 business divisions. One integrated construction group — since 2069 B.S.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-surface font-body text-base leading-[1.6] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
