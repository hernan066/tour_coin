"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { Loading } from "@/components/loader/Loading";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Tour Coin",
  description: "Tour Coin",
}; */

export default function RootLayout({ children, params: { locale } }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {showLoader && <Loading />}
        {!showLoader && children}
      </body>
    </html>
  );
}
