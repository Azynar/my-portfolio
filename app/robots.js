export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://azynardev.vercel.app/sitemap.xml',
    host: 'https://azynardev.vercel.app',
  };
}
