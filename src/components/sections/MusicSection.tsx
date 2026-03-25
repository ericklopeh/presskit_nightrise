import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function MusicSection({ spotlight = false }: { spotlight?: boolean }) {
  const { music } = siteContent;

  return (
    <section
      id="musica"
      className="scroll-mt-28 bg-metal-black py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-metal-chrome sm:text-4xl md:text-5xl">
            Música
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="mx-auto mt-10 w-full max-w-[720px] sm:mt-12">
            <div
              id="spotify-embed"
              className={`overflow-hidden rounded-xl bg-metal-void shadow-[0_8px_40px_rgba(0,0,0,0.45)] transition-[box-shadow,ring] duration-300 ${
                spotlight ? "music-spotlight" : ""
              }`}
            >
              <iframe
                title="Spotify — Nightrise"
                className="h-[352px] w-full max-w-full border-0"
                src={music.spotifyEmbedSrc}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
