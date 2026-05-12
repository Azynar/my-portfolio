import { Space_Grotesk, Manrope } from 'next/font/google'
import './globals.css'

const syne = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-syne',
})

const mono = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
})

export const metadata = {
  metadataBase: new URL('https://azynar.vercel.app'),
  title: {
    default: 'Azynar — Web3 & Web Developer · Technical Writer',
    template: '%s | Azynar',
  },
  description:
    'Azynar is a developer and technical writer who builds e-commerce stores, business websites, Web3 landing pages and dApps — and writes docs developers actually enjoy reading.',
  keywords: [
    'Web3',
    'Web Developer',
    'E-commerce',
    'Landing Page',
    'Solidity',
    'Smart Contracts',
    'Technical Writing',
    'Next.js',
    'React',
    'Blockchain',
    'Business Website',
    'Nigeria',
  ],
  authors: [{ name: 'Azynar' }],
  creator: 'Azynar',
  openGraph: {
    type: 'website',
    url: 'https://azynar.vercel.app',
    title: 'Azynar — Web3 & Web Developer · Technical Writer',
    description:
      'Developer and technical writer building web products, Web3 apps, and documentation that engineers actually use.',
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
    title: 'Azynar — Web3 & Web Developer · Technical Writer',
    description:
      'Developer and technical writer building web products, Web3 apps, and documentation that engineers actually use.',
    images: ['/avatar.png'],
    creator: '@Azynar01',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e6fff' },
    ],
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: 'Azynar',
  url: 'https://azynar.vercel.app',
  image: 'https://azynar.vercel.app/avatar.png',
  jobTitle: 'Full-Stack Developer & Technical Writer',
  description:
    'Developer and technical writer building web products, Web3 apps, and documentation that engineers actually use.',
  sameAs: [
    'https://github.com/Azynar',
    'https://twitter.com/Azynar01',
    'https://linkedin.com/in/abdulazeem-badmus-bb748b195',
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${syne.variable} ${mono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
          key="site-jsonld"
        />
      </body>
    </html>
  );
}