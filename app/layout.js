import { Syne, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata = {
  metadataBase: new URL('https://azynarofweb3.vercel.app'),
  title: 'Azynar — Web3 Developer & Technical Writer',
  description: 'Portfolio of Azynar — Web3 developer and technical writer focused on building clean Web3 products and writing docs that developers actually enjoy reading.',
  keywords: ['Web3', 'Solidity', 'Smart Contracts', 'Technical Writing', 'Next.js', 'React', 'Blockchain', 'DeFi', 'Landing Page', 'Developer Docs'],
  authors: [{ name: 'Azynar' }],
  creator: 'Azynar',
  openGraph: {
    type: 'website',
    url: 'https://azynarofweb3.vercel.app',
    title: 'Azynar — Web3 Developer & Technical Writer',
    description: 'Web3 developer and technical writer focused on building clean products and writing docs developers enjoy reading.',
    siteName: 'Azynar Portfolio',
    images: [
      {
        url: '/avatar.png',
        width: 500,
        height: 500,
        alt: 'Azynar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azynar — Web3 Developer & Technical Writer',
    description: 'Web3 developer and technical writer focused on building clean products and writing docs developers enjoy reading.',
    images: ['/avatar.png'],
    creator: '@Azynar01',
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${syne.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}