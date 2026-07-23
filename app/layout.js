import { Syne, Manrope } from 'next/font/google'
import './globals.css'

const display = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
})

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
})

export const metadata = {
  metadataBase: new URL("https://azynardev.vercel.app"),
  title: {
    default: "Abdulazeem Badmus — Web Developer | Nigeria",
    template: "%s | Azynar Dev",
  },
  description:
    "Web Developer based in Nigeria. I build AI-powered web applications and automation tools for startups and small businesses using Next.js, React, and Node.js. Open to remote roles and freelance projects.",
  keywords: [
    "web developer Nigeria",
    "AI developer Nigeria",
    "automation developer Nigeria",
    "Next.js developer Nigeria",
    "React developer Nigeria",
    "Abdulazeem Badmus",
    "Azynar",
    "freelance developer Nigeria",
    "web developer Ibadan",
  ],
  authors: [{ name: "Abdulazeem Badmus", url: "https://azynardev.vercel.app" }],
  creator: "Abdulazeem Badmus",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://azynardev.vercel.app",
    siteName: "Azynar Dev",
    title: "Abdulazeem Badmus — Web Developer",
    description:
      "Building modern web apps and automation tools from Nigeria.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Abdulazeem Badmus — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazeem Badmus — Web Developer",
    description: "Building AI-powered web apps and automation tools from Nigeria.",
    creator: "@Azynar01",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://azynardev.vercel.app" },

  verification:{
    google: 'T-Ua_j-CbE8COT87A8_gJrWJ_6x9_Qb3RuPnluF5yzU'
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: 'Abdulazeem Badmus',
  alternateName: 'Azynar',
  url: 'https://azynardev.vercel.app',
  image: 'https://azynardev.vercel.app/avatar.png',
  jobTitle: 'Web Developer',
  worksFor: { "@type": "Organization", name: "Azynar — Independent Practice" },
  address: { 
    "@type": "PostalAddress", 
    addressLocality: "Ibadan",
    addressRegion: "Oyo",
    addressCountry: "NG" 
  },
  description:
    'AI-powered web developer helping startups and small businesses build faster and automate smarter.',
  sameAs: [
    'https://github.com/Azynar',
    'https://twitter.com/Azynar01',
    'https://linkedin.com/in/abdulazeem-badmus-bb748b195',
  ],
  knowsAbout: [
    "Full Stack Development", "React", "Next.js", "Node.js",
    "AI Integration", "Automation", "JavaScript", "Tailwind CSS",
    "Website Development", "Content Creation", "Developer Tools",
    "Web Development", "Software Engineering", "Programming",
    "Open Source", "Remote Work", "Freelancing", "Developer Portfolio",
    "Automation Tools", "Developer Education"
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: 'https://azynardev.vercel.app',
  name: 'Azynar',
  author: { "@type": "Person", name: 'Abdulazeem Badmus' },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
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