/**
 * Renders a JSON-LD structured-data script tag.
 *
 * Server-safe: emits a static <script> in the server-rendered HTML so AI crawlers
 * and search engines read the structured data without executing JavaScript.
 */

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, build-time content, safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
