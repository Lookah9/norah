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

export async function generateMetadata(): Promise<Metadata> {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  return {
    title: 'Villa Norah | Exclusive Private Estate in the French Riviera',
    description: 'Weddings, corporate retreats, private celebrations and elegant stays in a secluded botanical setting.',
    icons: {
      icon: [
        { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
        { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      ],
      apple: [
        { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'manifest', url: `${basePath}/site.webmanifest` },
        { rel: 'preload', url: `${basePath}/Hero_converted.webp`, as: 'image', fetchpriority: 'high' },
        { rel: 'preload', url: `${basePath}/Logos/Logo_white_optimized.png`, as: 'image' },
      ],
    },
  };
}

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
