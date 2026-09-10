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
  title: 'Mandili Technology Co., Ltd. | Intelligent Electronic Terminals & Solutions',
  description:
    'Mandili Technology Co., Ltd., established in 2022. High-performance laptops, all-in-one PCs, uninterruptible power supplies (UPS), AI smart glasses, wireless earphones, customized electronic solutions, and creative packaging.',
  keywords: [
    'Mandili Technology',
    'Mandili Technology Co., Ltd.',
    'Intelligent Electronic Terminals',
    'High-Performance Laptops',
    'All-in-One PCs',
    'Uninterruptible Power Supplies',
    'UPS',
    'AI Smart Glasses',
    'Wireless Earphones',
    'Customized Solutions',
    'Creative Packaging',
    'Technology with a Human Touch',
  ],
  authors: [{ name: 'Mandili Technology Co., Ltd.' }],
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