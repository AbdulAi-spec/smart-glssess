import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Shenzhen Mandyli Technology | Flagship Hardware Showcase',
  description:
    'Ultra-luxury corporate hardware showcase for Shenzhen Mandyli Technology. Featuring the Flagship Convertible Studio Laptop DJS140S and Neural AR Smart Glasses. Precision engineered in Shenzhen.',
  keywords: [
    'Shenzhen Mandyli Technology',
    'Convertible Studio Laptop',
    'DJS140S',
    'Neural AR Smart Glasses',
    'Waveguide Optics',
    'Vapor Chamber Cooling',
    'Shenzhen Precision Hardware',
  ],
  authors: [{ name: 'Shenzhen Mandyli Technology Co., Ltd.' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-obsidian-950 text-white font-sans antialiased selection:bg-champagne/30 selection:text-white">
        <SmoothScrollProvider>
          {/* Subtle Ambient Top Glow */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-radial-radial from-champagne/[0.04] to-transparent blur-3xl pointer-events-none z-0" />
          
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
