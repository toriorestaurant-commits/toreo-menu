import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TORÉO",
  description: "Delicious steaks and gourmet dishes served fresh daily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-poppins antialiased`}>
        <div className="min-h-screen animate-page-fade">
          {children}
        </div>
      </body>
    </html>
  );
}
