import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Villa Norah | Exclusive Private Estate in the French Riviera',
  description: 'Weddings, corporate retreats, private celebrations and elegant stays in a secluded botanical setting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`overscroll-none ${playfair.variable} ${inter.variable}`}>
      <body className="overscroll-none font-sans antialiased text-brand-charcoal bg-brand-ivory min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
