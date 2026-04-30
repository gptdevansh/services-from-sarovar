import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/features/user";
import { RESORT_NAME, RESORT_ADDRESS } from "@/shared/constants/ui.constants";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: `Services from ${RESORT_NAME}`,
  description: `Safari, cab & leisure services at ${RESORT_NAME}, ${RESORT_ADDRESS}`,
  icons: {
    icon: '/icon.svg',
  },
};

// Explicit viewport — critical for mobile-first rendering
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
