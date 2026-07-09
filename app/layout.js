import { Space_Grotesk, Manrope } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
  metadataBase: new URL("https://azynardev.vercel.app"),
  title: {
    default: "Abdulazeem Badmus — Full Stack Developer & Technical Writer | Nigeria",
    template: "%s | Azynar Dev",
  },
  description:
    "Full Stack Developer and Technical Writer based in Nigeria. I build AI-powered web apps, Web3 interfaces, and automation tools using Next.js, React, and Node.js. Open to remote roles and freelance projects.",
  keywords: [
    "full stack developer Nigeria",
    "web developer Nigeria",
    "AI developer Nigeria",
    "technical writer Web3",
    "Next.js developer Nigeria",
    "React developer Nigeria",
    "Abdulazeem Badmus",
    "Azynar",
    "freelance developer Nigeria",
    "Web3 developer Nigeria",
  ],
  authors: [{ name: "Abdulazeem Badmus", url: "https://azynardev.vercel.app" }],
  creator: "Abdulazeem Badmus",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://azynardev.vercel.app",
    siteName: "Azynar Dev",
    title: "Abdulazeem Badmus — Full Stack Developer & Technical Writer",
    description:
      "Building AI-powered web apps, Web3 interfaces, and automation tools from Nigeria.",
    images: [
      {
        url: "/og-svg", // create this — 1200x630px with your name + title
        width: 1200,
        height: 630,
        alt: "Abdulazeem Badmus — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazeem Badmus — Full Stack Developer & Technical Writer",
    description: "Building AI-powered web apps and Web3 tools from Nigeria.",
    creator: "@Azynar01",
    images: ["/og.svg"],
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
  jobTitle: 'Full-Stack Developer & Technical Writer',
  worksFor: { "@type": "Organization", name: "Azynar — Independent Practice" },
  address: { "@type": "PostalAddress", addressCountry: "NG", addressRegion: "Ibadan" },
  description:
    'AI-powered JavaScript developer and technical writer helping startups build faster, automate smarter, and document clearly.',
  sameAs: [
    'https://github.com/Azynar',
    'https://twitter.com/Azynar01',
    'https://linkedin.com/in/abdulazeem-badmus-bb748b195',
  ],
  knowsAbout: [
        "Full Stack Development", "React", "Next.js", "Node.js",
        "Web3 Development", "Technical Writing", "AI Integration", "Automation", "JavaScript", "Tailwind CSS", "Website Development", "Content Creation", "Developer Tools" , "Web Development", "Software Engineering", "Programming", "Open Source", "Remote Work", "Freelancing" , "Developer Portfolio", "Web3 Interfaces", "Automation Tools", "Technical Documentation", "Developer Education" 
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
        <SpeedInsights />
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