import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function MembersSection() {
  const { members } = siteContent;

  return (
    <section
      id="banda"
      className="scroll-mt-28 bg-metal-black py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-metal-chrome sm:text-4xl md:text-5xl">
            Integrantes
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <article
                aria-labelledby={`member-${i}-sr-name`}
                className="flex h-full min-h-0 flex-col overflow-hidden rounded-sm bg-gradient-to-b from-metal-steel/25 to-metal-black/40 transition"
              >
                <span id={`member-${i}-sr-name`} className="sr-only">
                  {m.name}
                </span>
                <div className="relative aspect-[4/5] min-h-[280px] w-full shrink-0 bg-metal-steel/35 sm:min-h-[320px]">
                  {m.photoSrc ? (
                    <Image
                      src={m.photoSrc}
                      alt={m.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 20vw"
                      className="object-cover object-top"
                      priority={i < 2}
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col items-center justify-end bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,198,206,0.12),transparent_60%),linear-gradient(180deg,rgba(26,27,34,0.9),rgba(7,7,8,0.95))] px-4 pb-6 text-center"
                      aria-hidden
                    >
                      <span className="font-display text-4xl font-semibold text-metal-silver/25">
                        {m.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")}
                      </span>
                      <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-metal-silver/40">
                        Foto próximamente
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-1.5 bg-metal-black/25 p-4 sm:gap-2 sm:p-5">
                  <p className="text-center font-display text-sm font-semibold text-metal-chrome sm:text-base">
                    {m.name}
                  </p>
                  <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-metal-blood sm:text-sm">
                    {m.instrument}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
