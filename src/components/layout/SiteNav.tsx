"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MetalButton } from "@/components/ui/MetalButton";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#musica", label: "Música" },
  { href: "#videos", label: "Videos" },
  { href: "#banda", label: "Banda" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#descargas", label: "Descargas" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-metal-black/85 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex min-h-16 items-center justify-end gap-2 py-2 sm:min-h-[4.25rem] sm:py-2.5">
        <a
          href="#inicio"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-auto focus:w-auto focus:translate-x-0 focus:overflow-visible focus:rounded-sm focus:bg-metal-steel focus:px-3 focus:py-2 focus:text-sm focus:text-metal-chrome focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-metal-chrome/60"
        >
          Ir al inicio
        </a>
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-wider text-metal-silver/80 transition hover:bg-white/[0.04] hover:text-metal-chrome"
            >
              {l.label}
            </a>
          ))}
          <MetalButton
            variant="light"
            className="ml-3 hidden xl:inline-flex !py-2.5 !text-[11px]"
            onClick={() => {
              document.getElementById("contacto")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Booking
          </MetalButton>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-metal-black/40 text-metal-chrome"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              {open ? (
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              ) : (
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>
      {open ? (
        <div id="mobile-menu" className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 top-16 z-0 bg-metal-black/90 backdrop-blur-md"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <nav
            className="relative z-10 bg-metal-black/98 px-5 py-6"
            aria-label="Móvil"
          >
            <div className="mx-auto flex max-w-md flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-sm px-3 py-3 text-sm font-semibold uppercase tracking-wider text-metal-silver hover:bg-white/[0.04] hover:text-metal-chrome"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <MetalButton
                variant="light"
                className="mt-4 w-full justify-center"
                onClick={() => {
                  setOpen(false);
                  document.getElementById("contacto")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Booking
              </MetalButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
