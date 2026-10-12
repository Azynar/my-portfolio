const siteUrl = 'https://azynardev.vercel.app';

export function createPageMetadata({
  title,
  description,
  path = '',
}) {
  const canonicalPath = path ? `/${path.replace(/^\/+|\/+$/g, '')}` : '';
  const canonicalUrl = `${siteUrl}${canonicalPath || '/'}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'AZYNAR',
      type: 'website',
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
      title,
      description,
      images: ['/og.png'],
    },
  };
}
