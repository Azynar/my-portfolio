const projects = [
  {
    slug: 'personal-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Web Development',
    status: null,
    desc: 'A fully deployed developer portfolio with a working contact form, automated emails, and CI/CD straight from GitHub to a live URL.',
    long: `Built and deployed a full-stack portfolio with a working contact form backend, automated email delivery via Resend, and a CI/CD pipeline through GitHub and Vercel. Every push to GitHub redeploys automatically — from a saved file to a live URL in under 60 seconds, no manual steps in between.`,
    problem: 'Needed a compact, fast personal site to showcase work and make contacting easy.',
    solution: 'Built a Next.js app with modular components, an easy contact form, and fast static rendering for pages.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://azynardev.vercel.app',
    github: 'https://github.com/Azynar/my-portfolio',
    image: '/portfolio.png',
  },
  {
    slug: 'naija-memecoin',
    title: '$NAIJA Memecoin Landing Page',
    category: 'Web3',
    status: null,
    desc: 'A culturally grounded Web3 landing page for a Nigerian memecoin community, designed and shipped in under a week.',
    long: `A landing page built to introduce and onboard users to a memecoin project with culturally familiar design cues, a clear tokenomics overview, and a low-friction signup flow — built specifically to make Web3 feel approachable to a regional audience unfamiliar with typical crypto-site conventions.`,
    problem: 'Make Web3 approachable for a regional audience.',
    solution: 'Styled copy, clear CTAs and educational sections to lower friction for newcomers.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://azynar.github.io/naija-memecoin/',
    github: 'https://github.com/Azynar/naija-memecoin/',
    image: '/naija-memecoin.png',
  },
  {
    slug: 'gigsignal-bot',
    title: 'gigSignal Automation Bot',
    category: 'Automation',
    status: 'Inactive',
    desc: 'An automation bot that tracked Web3 opportunities in real time and pushed instant alerts to Telegram — currently inactive after hitting free-tier hosting limits.',
    long: `A small service that watched multiple Web3 data feeds — token launches, DEX listings, bounties, and job postings — and broadcast curated signals to subscribers via Telegram, saving hours of manual checking every week. Built to be lightweight and reliable, with retry logic and basic monitoring. Currently paused after exceeding free-tier hosting limits — screenshots below show it running live.`,
    problem: 'Users miss important real-time signals across many channels.',
    solution: 'Create a single bot that centralizes signals and delivers them to interested users.',
    tags: ['Node.js', 'Telegram API', 'Railway'],
    demo: 'N/A',
    github: 'https://github.com/Azynar/gigSignal_bot',
    image: '/gigsignal-bot.png',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export default projects;