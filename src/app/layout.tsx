import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Monobuild — Engineering with intent.',
    template: '%s | Monobuild',
  },
  description:
    'Monobuild is an independent software studio crafting precision-engineered tools, products, and platforms with architectural rigor and quiet authority.',
  keywords: ['software', 'engineering', 'product', 'studio', 'monobuild', 'next.js'],
  authors: [{ name: 'Monobuild' }],
  creator: 'Monobuild',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monobuild.io',
    siteName: 'Monobuild',
    title: 'Monobuild — Engineering with intent.',
    description:
      'An independent software studio building precision-engineered products and platforms.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monobuild — Engineering with intent.',
    description: 'An independent software studio building precision-engineered products and platforms.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-on-background)]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
