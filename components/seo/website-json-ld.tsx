interface WebsiteJsonLdProps {
  name?: string;
  url: string;
  searchUrl: string;
}

export function WebsiteJsonLd({
  name = "Kiiro.cx",
  url = "https://kiiro.cx",
  searchUrl = "https://kiiro.cx/search?q={search_term_string}",
}: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrl,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-unknown-property
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
