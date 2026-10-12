import { Syne, Manrope } from 'next/font/google';
import './globals.css';
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const display = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
});

export const metadata = {
  metadataBase: new URL('https://azynardev.vercel.app'),
  title: {
    default: 'AZYNAR | Badmus Abdulazeem Babatunde — Web Developer',
    template: '%s | AZYNAR',
  },
  description:
    'Official portfolio of Badmus Abdulazeem Babatunde, the developer behind AZYNAR. Explore websites, web applications, business systems, and selected projects.',
  keywords: [
    'AZYNAR',
    'Badmus Abdulazeem Babatunde',
    'Web Developer Nigeria',
    'Business website developer',
    'Website development Nigeria',
    'Custom web applications',
    'Business systems integration',
    'Next.js developer',
    'React developer',
    'AZYNAR portfolio',
  ],
  authors: [{ name: 'Abdulazeem Badmus', url: 'https://azynardev.vercel.app' }],
  creator: 'Abdulazeem Badmus',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://azynardev.vercel.app',
    siteName: 'AZYNAR',
    title: 'AZYNAR | Badmus Abdulazeem Babatunde — Web Developer',
    description:
      'Official portfolio of Badmus Abdulazeem Babatunde, the developer behind AZYNAR. Explore websites, web applications, business systems, and selected projects.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'AZYNAR portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZYNAR | Badmus Abdulazeem Babatunde — Web Developer',
    description: 'Official portfolio of Badmus Abdulazeem Babatunde, the developer behind AZYNAR. Explore websites, web applications, business systems, and selected projects.',
    creator: '@Azynar01',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://azynardev.vercel.app' },
  verification: {
    google: 'T-Ua_j-CbE8COT87A8_gJrWJ_6x9_Qb3RuPnluF5yzU',
  },
};

// Rich Structured Data for AEO (Answer Engine Optimization) & Google Search
const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Badmus Abdulazeem Babatunde',
  alternateName: ['Abdulazeem Badmus', 'AZYNAR', 'Azynar'],
  url: 'https://azynardev.vercel.app',
  image: 'https://azynardev.vercel.app/avatar.png',
  jobTitle: 'Web Developer',
  description:
    'Badmus Abdulazeem Babatunde is a web developer building websites, web applications, and business systems for businesses and startups.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ibadan',
    addressRegion: 'Oyo State',
    addressCountry: 'NG',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University of Ilorin',
  },
  sameAs: [
    'https://github.com/Azynar',
    'https://twitter.com/Azynar01',
    'https://linkedin.com/in/abdulazeem-badmus-bb748b195',
    'https://azynar.hashnode.dev',
  ],
  knowsAbout: [
    'Web Development',
    'React.js',
    'Next.js App Router',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Supabase',
    'REST APIs',
    'Business systems integration',
    'Website development',
    'Custom web applications',
    'Customer portals',
    'Workflow automation',
  ],
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://azynardev.vercel.app',
  name: 'AZYNAR',
  alternateName: ['Azynar'],
  author: {
    '@type': 'Person',
    name: 'Badmus Abdulazeem Babatunde',
  },
  description:
    'Official portfolio of Badmus Abdulazeem Babatunde, the developer behind AZYNAR, showcasing websites, web applications, business systems, and selected projects.',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Badmus Abdulazeem Babatunde (AZYNAR)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Badmus Abdulazeem Babatunde builds digital solutions under the AZYNAR brand, focused on websites, web applications, and business systems for businesses and startups.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does AZYNAR offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AZYNAR offers website development, web applications and custom software, business systems and integrations, and e-commerce website planning for businesses that need practical digital tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technologies does AZYNAR use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AZYNAR works with Next.js, React, TypeScript, Tailwind CSS, Node.js, and APIs or database-backed tools such as Supabase and PostgreSQL depending on the project requirements.',
      },
    },
  ],
};

const themeInitScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = stored || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning className={`${display.variable} ${body.variable} min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent)] selection:text-white`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
          key="site-jsonld-faq"
        />
      </body>
    </html>
  );
}