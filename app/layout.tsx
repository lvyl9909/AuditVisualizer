import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          {/* Header part */}
          <header className="flex items-center py-2">
            <Image src="/Logo.png" alt="Logo" width={80} height={80} />
            <h1 className="text-3xl font-bold ml-4">AuditVisualiser</h1>
          </header>
          {/* Main content */}
          <main className="flex flex-col flex-grow bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
