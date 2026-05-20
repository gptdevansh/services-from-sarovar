import type { Metadata } from "next";
import type { Viewport } from "next";
import { Cinzel, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/features/user";
import { BRAND_NAME, RESORT_NAME, RESORT_ADDRESS } from "@/shared/constants/ui.constants";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Official Jim Corbett Safari & Travel Services`,
    template: `%s | ${BRAND_NAME}`
  },
  description: `Book your ultimate Corbett Safari experience with ${BRAND_NAME}. Providing premium Jeep safaris, Canter safaris, and luxury cab services from ${RESORT_NAME} at ${RESORT_ADDRESS}.`,
  keywords: ["Jim Corbett Safari", "Panthera Corbett Safari", "Jeep Safari Booking", "Dhikala Safari", "Corbett Cab Service", "Vandhara Sarovar Resort Safari"],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
      <body className={`${sourceSans.variable} ${cinzel.variable}`}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
