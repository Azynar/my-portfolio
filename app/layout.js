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
    default: 'Abdulazeem Badmus — Azynar · Full-Stack Developer & Technical Writer',
    template: '%s | Azynar',
  },
  description:
    'JavaScript developer and technical writer working at the intersection of Web2, Web3, and AI-assisted development. I build fast, ship real things, and document everything clearly.',
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
  authors: [{ name: 'Abdulazeem Badmus' }],
  creator: 'Abdulazeem Badmus',
  openGraph: {
    type: 'website',
    url: 'https://azynardev.vercel.app',
    title: 'Abdulazeem Badmus — Azynar · Full-Stack Developer & Technical Writer',
    description:
      'JavaScript developer and technical writer working at the intersection of Web2, Web3, and AI-assisted development. I build fast, ship real things, and document everything clearly.',
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
    title: 'Abdulazeem Badmus — Azynar · Full-Stack Developer & Technical Writer',
    description:
      'JavaScript developer and technical writer working at the intersection of Web2, Web3, and AI-assisted development. I build fast, ship real things, and document everything clearly.',
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
    'JavaScript developer and technical writer working at the intersection of Web2, Web3, and AI-assisted development. I build fast, ship real things, and document everything clearly.',
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