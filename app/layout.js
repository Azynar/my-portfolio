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
  metadataBase: new URL("https://azynardev.vercel.app"),
  title: {
    default: "Abdulazeem Badmus (Azynar) — Web Developer & Automation Engineer",
    template: "%s | Azynar",
  },
  description:
    "Abdulazeem Badmus (Azynar) is a Web Developer based in Nigeria specializing in React, Next.js, Tailwind CSS, TypeScript, Node.js, and Supabase.",
  keywords: [
    "Abdulazeem Badmus",
    "Azynar",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer Nigeria",
    "TypeScript Developer",
    "Tailwind CSS",
    "Node.js Developer",
    "Supabase Developer",
    "REST API Integration",
    "Web Developer Ibadan",
    "Software Engineer Nigeria",
  ],
  authors: [{ name: "Abdulazeem Badmus", url: "https://azynardev.vercel.app" }],
  creator: "Abdulazeem Badmus",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://azynardev.vercel.app",
    siteName: "Azynar",
    title: "Abdulazeem Badmus — Web Developer & Automation Engineer",
    description:
      "Crafting high-speed web apps and reliable automated systems with Next.js, React, TypeScript, and Node.js.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Abdulazeem Badmus (Azynar) — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazeem Badmus — Web Developer & Automation Engineer",
    description: "Crafting high-speed web apps and automated systems with Next.js, React, TypeScript, and Node.js.",
    creator: "@Azynar01",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://azynardev.vercel.app" },
  verification: {
    google: 'T-Ua_j-CbE8COT87A8_gJrWJ_6x9_Qb3RuPnluF5yzU',
  },
};

// Rich Structured Data for AEO (Answer Engine Optimization) & Google Search
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulazeem Badmus",
  alternateName: ["Azynar", "Azynar Dev"],
  url: "https://azynardev.vercel.app",
  image: "https://azynardev.vercel.app/avatar.png",
  jobTitle: "Web Developer",
  description:
    "Abdulazeem Badmus (Azynar) is a Web Developer and Computer Science graduate specializing in React, Next.js, TypeScript, Tailwind CSS, Node.js, and Supabase.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ibadan",
    addressRegion: "Oyo State",
    addressCountry: "NG"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Ilorin"
  },
  sameAs: [
    "https://github.com/Azynar",
    "https://twitter.com/Azynar01",
    "https://linkedin.com/in/abdulazeem-badmus-bb748b195",
    "https://azynar.hashnode.dev"
  ],
  knowsAbout: [
    "Web Development",
    "React.js",
    "Next.js App Router",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "REST APIs",
    "CRUD Operations",
    "Telegram Bot Automation",
    "Performance Optimization",
    "Responsive Web Design"
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://azynardev.vercel.app",
  name: "Azynar — Web Developer Portfolio",
  author: {
    "@type": "Person",
    name: "Abdulazeem Badmus"
  },
  description: "Official portfolio of Abdulazeem Badmus (Azynar) showcasing web applications, case studies, and engineering articles."
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Abdulazeem Badmus (Azynar)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abdulazeem Badmus (building as Azynar) is a Web Developer and Computer Science graduate from the University of Ilorin based in Nigeria. He builds responsive web applications using React, Next.js, TypeScript, Tailwind CSS, Node.js, and Supabase."
      }
    },
    {
      "@type": "Question",
      name: "What technologies does Abdulazeem Badmus use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Abdulazeem Badmus specializes in Next.js (App Router), React 19, TypeScript, Tailwind CSS for frontend development, and Node.js, Supabase, PostgreSQL, and REST APIs (fetch, patch, update, CRUD) for backend integrations."
      }
    },
    {
      "@type": "Question",
      name: "What services does Azynar offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Azynar offers Frontend Web Development, Full-Stack Next.js Application Development, REST API Integration, and Custom Workflow Automations (such as Telegram alert bots and webhooks)."
      }
    }
  ]
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