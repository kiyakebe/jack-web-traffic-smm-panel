import type { Metadata } from "next";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { PropsWithChildren } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FurnishPlus",
  description: "Generated by create next app",
};

type LayoutProps = PropsWithChildren & {
  cart?: React.ReactNode;
  wishlist?: React.ReactNode;
};

export default function RootLayout({ children, cart, wishlist }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-center" theme="colored" />
        {children}
        {cart}
        {wishlist}
      </body>
    </html>
  );
}
