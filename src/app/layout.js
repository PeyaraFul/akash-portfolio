import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akash Mia",
  description: "Akash Mia's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="md:mx-30 max-w-[1859px] lg:mx-auto">
          <Toaster
            toastOptions={{
              removeDelay: 300,
            }}
          />
          {children}
        </main>
      </body>
    </html>
  );
}
