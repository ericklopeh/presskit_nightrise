import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function VideosSection() {
  const { videos } = siteContent;

  return (
    <section
      id="videos"
      className="scroll-mt-28 bg-metal-void py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-metal-chrome sm:text-4xl md:text-5xl">
            Videos
          </h2>
        </Reveal>

        {videos.items.length === 0 ? (
          <Reveal delay={80}>
            <p className="mt-10 text-center font-display text-xl font-semibold text-metal-silver/85 sm:mt-12 sm:text-2xl">
              Próximamente
            </p>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 sm:mt-12">
            {videos.items.map((v, i) => (
              <Reveal key={v.id} delay={i * 80}>
                <article className="group overflow-hidden rounded-sm bg-metal-black/50 transition">
                  <div className="aspect-video w-full bg-metal-steel/30">
                    <iframe
                      title={v.title}
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="font-display text-base font-semibold text-metal-chrome transition group-hover:text-white">
                      {v.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
