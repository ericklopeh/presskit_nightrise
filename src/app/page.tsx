import { HomePage } from "@/components/HomePage";
import { siteContent } from "@/data/siteContent";

export default function Page() {
  const { band, biography, contact, social } = siteContent;

  const sameAs = social.map((s) => s.url);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: band.name,
    genre: band.genre,
    description: biography[0] ?? band.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
    },
    email: contact.booking.email,
    sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
