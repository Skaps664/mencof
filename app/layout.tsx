import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MensConfidence.pk - Premium Men's Products",
  description: "Your trusted source for men's confidence and style products in Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} style={{
        backgroundImage: `
          linear-gradient(to right, #999d87 1px, transparent 1px),
          linear-gradient(to bottom, #999d87 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundColor: '#A5A991'
      }}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
