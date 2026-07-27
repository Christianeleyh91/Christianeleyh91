import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

const baseMetadata: Metadata = {
  title: {
    default: "Christian Eleyh — Pianist & Creative Developer",
    template: "%s — Christian Eleyh",
  },
  description:
    "وب‌سایت شخصی کریستیان ایلیه؛ پیانیست و توسعه‌دهنده خلاق Python، C++ و وب.",
  keywords: [
    "Christian Eleyh",
    "کریستیان ایلیه",
    "Pianist",
    "Python",
    "C++",
    "Web Developer",
  ],
  authors: [{ name: "Christian Eleyh Babrudy" }],
  creator: "Christian Eleyh",
  icons: {
    icon: "/favicon.svg?v=ce-2",
    shortcut: "/favicon.svg?v=ce-2",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    title: "Christian Eleyh — Code, Keys & Curiosity",
    description:
      "پیانیست، توسعه‌دهنده خلاق و جست‌وجوگر دنیای بین نت‌های موسیقی و خطوط کد.",
    siteName: "Christian Eleyh",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Christian Eleyh — Code, Keys & Curiosity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Eleyh — Code, Keys & Curiosity",
    description: "Pianist, creative developer, endlessly curious.",
    creator: "@Christianeleyh",
    images: ["/og.png"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ||
    requestHeaders.get("host") ||
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ||
    (host.startsWith("localhost") ? "http" : "https");
  return {
    ...baseMetadata,
    metadataBase: new URL(`${protocol}://${host}`),
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#061127" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7fc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
