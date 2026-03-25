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
      className="relative isolate flex min-h-[100svh] flex-col overflow-x-hidden bg-black pt-20 sm:pt-[5.25rem]"
    >
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
        </div>
      ) : null}

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center pb-16 sm:pb-24 md:pb-28">
        <Container className="relative">
        <h1 className="sr-only">{band.name}</h1>
        <Reveal>
          <div className="flex w-full justify-center px-2 pb-5 pt-2 sm:px-4 sm:pb-6 sm:pt-4 md:pb-8">
            <figure className="mx-auto w-full max-w-3xl sm:max-w-4xl md:max-w-5xl">
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
