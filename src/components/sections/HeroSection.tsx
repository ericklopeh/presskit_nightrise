"use client";

import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { MetalButton } from "@/components/ui/MetalButton";
import { Reveal } from "@/components/ui/Reveal";

function scrollToId(id: string, onArrive?: () => void) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => onArrive?.(), 700);
}

export function HeroSection({
  onListenNow,
}: {
  onListenNow?: () => void;
}) {
  const { band, hero } = siteContent;
  const useBg = hero.useBackgroundImage;

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] flex-col overflow-x-hidden pt-[5.25rem] sm:pt-24"
    >
      <div className="absolute inset-0 -z-20 bg-metal-void" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_20%,rgba(122,21,24,0.22),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(196,198,206,0.08),transparent_50%),linear-gradient(180deg,rgba(7,7,8,0.2),rgba(7,7,8,0.96))]"
        aria-hidden
      />
      {useBg ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-[center_6%] sm:object-[center_4%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-metal-black/62 via-metal-black/38 to-metal-black/90"
            aria-hidden
          />
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-5 h-40 bg-gradient-to-t from-metal-black to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mt-auto w-full pb-20 sm:pb-28">
        <div
          className="pointer-events-none h-[min(32svh,13.5rem)] shrink-0 sm:h-[min(38svh,18rem)] md:h-[min(42svh,20.5rem)]"
          aria-hidden
        />
        <Container className="relative">
        <h1 className="sr-only">{band.name}</h1>
        <Reveal>
          <div className="flex w-full justify-center px-2 pb-6 pt-0 sm:px-4 sm:pb-8 md:pb-10">
            <figure className="mx-auto w-full max-w-3xl translate-y-5 sm:max-w-4xl sm:translate-y-7 md:max-w-5xl md:translate-y-9">
              <Image
                src={band.logoSrc}
                alt=""
                width={1400}
                height={350}
                priority
                aria-hidden
                className="mx-auto block h-auto w-full object-contain object-center drop-shadow-[0_16px_56px_rgba(0,0,0,0.75)]"
              />
            </figure>
          </div>
        </Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal delay={80}>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <MetalButton
                variant="light"
                className="w-full justify-center sm:w-auto"
                onClick={() =>
                  scrollToId("musica", () => {
                    onListenNow?.();
                  })
                }
              >
                Escuchar ahora
              </MetalButton>
              <MetalButton
                variant="outline"
                className="w-full justify-center sm:w-auto"
                onClick={() => scrollToId("descargas")}
              >
                Descargar press kit
              </MetalButton>
              <MetalButton
                variant="ghost"
                className="w-full justify-center sm:w-auto"
                onClick={() => scrollToId("contacto")}
              >
                Contacto / Booking
              </MetalButton>
            </div>
          </Reveal>
        </div>
      </Container>
      </div>
    </section>
  );
}
