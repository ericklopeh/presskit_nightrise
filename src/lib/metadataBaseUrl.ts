/** URL por defecto si falta o es inválida la variable de entorno. */
const FALLBACK = "https://nightrise-presskit.vercel.app";

/**
 * Evita que `new URL()` lance (p. ej. `localhost:3000` sin protocolo o string vacío),
 * que en Next.js tumba todo el arranque al evaluar `metadata.metadataBase`.
 */
export function resolveMetadataBaseUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return new URL(FALLBACK);

  const href = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    return new URL(href);
  } catch {
    return new URL(FALLBACK);
  }
}
