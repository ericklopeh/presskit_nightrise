import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function TimelineSection() {
  const { milestones } = siteContent;
  const featured = milestones.filter((m) => m.featured);
  const rest = milestones.filter((m) => !m.featured);

  return (
    <section
      id="trayectoria"
      className="scroll-mt-28 bg-metal-void py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight text-metal-chrome sm:mb-14 sm:text-4xl md:text-5xl">
            Trayectoria
          </h2>
        </Reveal>

        {featured.map((m, i) => (
          <Reveal key={`featured-${m.headline}`} delay={i * 40}>
            <article className="mx-auto mb-16 max-w-5xl space-y-4 sm:mb-20 sm:space-y-5">
              {m.imageSrc ? (
                <div className="relative w-full">
                  <div className="absolute left-2 top-2 z-10 sm:left-3 sm:top-3">
                    <span className="inline-flex items-center rounded-sm bg-metal-blood/35 px-2.5 py-1 font-display text-[9px] font-semibold uppercase tracking-[0.26em] text-metal-chrome backdrop-blur-md sm:text-[10px]">
                      Hito principal
                    </span>
                  </div>
                  <div className="relative h-[min(68vh,640px)] w-full overflow-hidden rounded-xl sm:h-[min(72vh,700px)] sm:rounded-2xl">
                    <Image
                      src={m.imageSrc}
                      alt={m.imageAlt ?? m.headline}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width:1024px) 100vw, 1024px"
                      priority
                    />
                  </div>
                </div>
              ) : null}
              <div className="px-0 sm:px-1">
                <p className="font-display text-xl font-semibold leading-snug text-metal-chrome sm:text-2xl md:text-3xl">
                  {m.headline}
                </p>
                <p className="mt-1.5 max-w-3xl text-xs font-medium leading-relaxed text-metal-silver/65 sm:text-sm">
                  {m.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}

        <ol className="mx-auto flex max-w-5xl flex-col gap-14 sm:gap-16">
          {rest.map((m, i) => (
            <Reveal key={`${m.headline}-${i}`} delay={i * 55}>
              <li className="w-full space-y-3 sm:space-y-4">
                {m.imageSrc ? (
                  <div className="relative h-[min(52vh,420px)] w-full overflow-hidden rounded-xl sm:h-[min(56vh,480px)] md:h-[min(58vh,520px)] sm:rounded-2xl">
                    <Image
                      src={m.imageSrc}
                      alt={m.imageAlt ?? m.headline}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width:1024px) 100vw, 1024px"
                    />
                  </div>
                ) : null}
                <div>
                  <p className="font-display text-lg font-semibold leading-snug text-metal-chrome sm:text-xl md:text-2xl">
                    {m.headline}
                  </p>
                  <p className="mt-1 max-w-3xl text-xs leading-relaxed text-metal-silver/60 sm:text-sm">
                    {m.detail}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
