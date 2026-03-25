import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetalLink } from "@/components/ui/MetalButton";
import { Reveal } from "@/components/ui/Reveal";

export function DownloadsSection() {
  const { downloads, contact } = siteContent;
  const waHref = `https://wa.me/${contact.whatsapp.number}`;

  return (
    <section
      id="descargas"
      className="scroll-mt-28 bg-metal-void py-20 sm:py-28"
    >
      <Container>
        <SectionHeader eyebrow="Descargas" title="Press kit — archivos" />
        <div className="mt-10 grid max-w-3xl gap-5 sm:mt-12 sm:grid-cols-2">
          {downloads.map((d, i) => (
            <Reveal key={d.id} delay={i * 55}>
              <div className="flex h-full flex-col rounded-sm bg-metal-steel/10 p-6">
                <h3 className="font-display text-lg font-semibold text-metal-chrome">
                  {d.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-metal-silver/78">
                  {d.description}
                </p>
                <div className="mt-6">
                  {d.available ? (
                    <MetalLink
                      href={d.href}
                      download
                      variant={d.id === "logo" ? "outline" : "primary"}
                      className={
                        d.id === "logo"
                          ? "w-full justify-center !py-3 !text-white hover:!text-white"
                          : "w-full justify-center !py-3"
                      }
                    >
                      Descargar
                    </MetalLink>
                  ) : (
                    <div className="flex w-full items-center justify-center rounded-sm bg-metal-black/40 py-3 text-xs font-semibold uppercase tracking-wider text-metal-silver/50">
                      Archivo pendiente
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-metal-silver/55">
              {contact.whatsapp.label}
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black shadow transition hover:bg-metal-chrome"
            >
              WhatsApp {contact.whatsapp.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
