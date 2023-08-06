import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blogs",
  description: "Created by Ashmeet Singh Monga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${poppins.className}`}>
        <ToasterProvider />
        <Navbar />
        <div className="flex w-full justify-center p-5 md:p-10">{children}</div>
      </body>
    </html>
  );
}
