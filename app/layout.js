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
  metadataBase: new URL('https://azynardev.vercel.app'),
  title: {
    default: 'Azynar — AI-Powered Developer & Technical Writer',
    template: '%s | Azynar',
  },
  description:
    'Azynar is an AI-powered JavaScript developer and technical writer helping startups build faster, automate smarter, and document clearly. Based in Nigeria. Working globally.',
  keywords: [
    'AI developer',
    'automation systems',
    'technical writer',
    'JavaScript developer',
    'Next.js',
    'Web3 developer',
    'Nigeria',
    'startup developer',
    'developer documentation',
    'Telegram bot',
    'workflow automation',
    'freelance developer',
  ],
  authors: [{ name: 'Abdulazeem Badmus' }],
  creator: 'Abdulazeem Badmus',
  openGraph: {
    type: 'website',
    url: 'https://azynardev.vercel.app',
    title: 'Azynar — AI-Powered Developer & Technical Writer',
    description:
      'Azynar is an AI-powered JavaScript developer and technical writer helping startups build faster, automate smarter, and document clearly. Based in Nigeria. Working globally.',
    siteName: 'Azynar Portfolio',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Azynar — Abdulazeem Badmus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azynar — AI-Powered Developer & Technical Writer',
    description:
      'Azynar is an AI-powered JavaScript developer and technical writer helping startups build faster, automate smarter, and document clearly. Based in Nigeria. Working globally.',
    images: ['/og.svg'],
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

  verification:{
    google: 'T-Ua_j-CbE8COT87A8_gJrWJ_6x9_Qb3RuPnluF5yzU'
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: 'Abdulazeem Badmus',
  url: 'https://azynardev.vercel.app',
  image: 'https://azynardev.vercel.app/avatar.png',
  jobTitle: 'Full-Stack Developer & Technical Writer',
  description:
    'AI-powered JavaScript developer and technical writer helping startups build faster, automate smarter, and document clearly.',
  sameAs: [
    'https://github.com/Azynar',
    'https://twitter.com/Azynar01',
    'https://linkedin.com/in/abdulazeem-badmus-bb748b195',
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: 'https://azynardev.vercel.app',
  name: 'Azynar',
  author: { "@type": "Person", name: 'Abdulazeem Badmus' },
  potentialAction: {
    "@type": "SearchAction",
    target: 'https://azynardev.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${syne.variable} ${mono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
          key="site-jsonld-person"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
          key="site-jsonld-website"
        />
      </body>
    </html>
  );
}