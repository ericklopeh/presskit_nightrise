import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/social/SocialIcons";

export function ContactSection() {
  const { contact, social } = siteContent;
  const waHref = `https://wa.me/${contact.whatsapp.number}`;

  return (
    <section
      id="contacto"
      className="scroll-mt-28 bg-metal-black py-20 sm:py-28"
    >
      <Container>
        <SectionHeader title="Booking y prensa" />
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="rounded-sm bg-metal-steel/20 p-8">
              <ul className="space-y-6">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-metal-silver/55">
                    {contact.booking.label}
                  </p>
                  <a
                    href={`mailto:${contact.booking.email}`}
                    className="mt-2 inline-block font-display text-lg text-metal-chrome transition hover:text-white"
                  >
                    {contact.booking.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-metal-silver/55">
                    {contact.press.label}
                  </p>
                  <a
                    href={`mailto:${contact.press.email}`}
                    className="mt-2 inline-block font-display text-lg text-metal-chrome transition hover:text-white"
                  >
                    {contact.press.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-metal-silver/55">
                    {contact.whatsapp.label}
                  </p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wider text-black shadow transition hover:bg-metal-chrome sm:w-auto"
                  >
                    WhatsApp {contact.whatsapp.display}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-sm bg-gradient-to-b from-metal-steel/25 to-metal-black/30 p-8">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-metal-silver/65">
                Redes y plataformas
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {social.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-sm bg-metal-black/30 px-4 py-3 text-sm text-metal-silver transition hover:bg-metal-black/45 hover:text-metal-chrome"
                    >
                      <SocialIcon platform={s.platform} />
                      <span>
                        <span className="block font-semibold text-metal-chrome">
                          {s.label}
                        </span>
                        {s.handle ? (
                          <span className="text-xs text-metal-silver/60">
                            @{s.handle.replace(/^@/, "")}
                          </span>
                        ) : null}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
