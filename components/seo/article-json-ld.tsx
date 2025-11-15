interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  keywords?: string[];
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image = "https://kiiro.cx/projects/kiiro.webp",
  datePublished,
  dateModified,
  authorName = "Kiiro.cx",
  keywords = [],
}: ArticleJsonLdProps) {
  const images = Array.isArray(image) ? image : [image];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://kiiro.cx",
    },
    publisher: {
      "@type": "Organization",
      name: "Kiiro.cx",
      logo: {
        "@type": "ImageObject",
        url: "https://kiiro.cx/projects/kiiro.webp",
      },
    },
    image: images,
    keywords: keywords.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

