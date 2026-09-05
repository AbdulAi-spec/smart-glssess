import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
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
      <body className="min-h-screen bg-[#050505] text-white/90 font-sans antialiased selection:bg-cyan-electric/30 selection:text-white">
        <SmoothScrollProvider>
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
