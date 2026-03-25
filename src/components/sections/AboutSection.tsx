import { siteContent } from "@/data/siteContent";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  const { biography } = siteContent;

  return (
    <section
      id="sobre"
      className="scroll-mt-28 bg-metal-void py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-metal-chrome sm:text-4xl md:text-5xl">
            Biografía
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-6 sm:mt-12 sm:space-y-7">
          {biography.map((paragraph, i) => (
            <Reveal key={i} delay={80 + i * 60}>
              <p className="text-base leading-relaxed text-metal-silver/88 sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
