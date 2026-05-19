const projects = [
  {
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Web Development',
    desc: 'Built and deployed a full-stack portfolio with\na working contact form backend, automated email delivery\nvia Resend, and CI/CD pipeline through GitHub and Vercel.\nShips updates in under 60 seconds from terminal to live URL.',
    long: `Built and deployed a full-stack portfolio with a working contact form backend, automated email delivery via Resend, and CI/CD pipeline through GitHub and Vercel. Ships updates in under 60 seconds from terminal to live URL.`,
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
    desc: 'Designed and shipped a Web3 landing page for\na Nigerian memecoin community. Demonstrates ability to move\nfast on Web3 project launches.',
    long: `A landing page designed to introduce and onboard users to a memecoin project with culturally familiar design cues, tokenomics overview and signup flow.`,
    problem: 'Make Web3 approachable for a regional audience.',
    solution: 'Styled copy, clear CTAs and educational sections to lower friction for newcomers.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    demo: '#',
    github: '#',
    image: null,
  },
  {
    slug: 'gigsignal-bot',
    title: 'gigSignal Bot',
    category: 'Web3 Tool',
    desc: 'Built a Telegram bot that monitors token\nlaunches, DEX listings, bounties, and job opportunities\nin real time. Deployed on Railway with scheduled jobs\nand clean factory-pattern architecture.',
    long: `A small service that watches multiple feeds and broadcasts curated signals to subscribers via Telegram. Built to be lightweight and reliable with retries and monitoring.`,
    problem: 'Users miss important real-time signals across many channels.',
    solution: 'Create a single bot that centralizes signals and delivers them to interested users.',
    tags: ['Node.js', 'Telegram API', 'Railway'],
    demo: 'N/A',
    github: 'https://github.com/Azynar/gigSignal_bot',
    image: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export default projects;
