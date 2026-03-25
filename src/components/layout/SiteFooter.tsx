import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/social/SocialIcons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { band, social } = siteContent;

  return (
    <footer className="bg-metal-void py-14">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-semibold tracking-[0.18em] text-metal-chrome">
              {band.name}
            </p>
            <p className="mt-2 text-sm text-metal-silver/65">
              {band.genre} · {band.city}
            </p>
            <p className="mt-3 text-xs text-metal-silver/45">
              © {year} {band.name}. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {social.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-sm bg-metal-black/35 text-metal-silver transition hover:bg-metal-black/50 hover:text-metal-chrome"
                aria-label={s.label}
              >
                <SocialIcon platform={s.platform} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
