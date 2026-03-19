import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientComponent from "@/components/component/ClientComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Lucas Magalhães",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.className} w-full`}>
        <div className="relative w-full overflow-x-hidden">
          <ClientComponent>
            {children}
          </ClientComponent>
        </div>
      </body>
    </html>
  );
}
