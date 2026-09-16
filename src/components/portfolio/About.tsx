import { Reveal, SectionTitle } from "./Reveal";
import { ABOUT, PROFILE } from "./data";
import { Sparkles, Film } from "lucide-react";

export function About() {
  return (
    <section id="sobre-mi" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Sobre mí" title="Historias hechas con ritmo y color" />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative">
            <span className="absolute -left-3 -top-3 size-1.5 rounded-full bg-lilac animate-pulse-glow" />
            <span className="absolute -right-2 top-1/3 size-1 rounded-full bg-primary animate-pulse-glow" />
            <div className="glass-panel h-full rounded-3xl p-7 sm:p-10">
              <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                {PROFILE.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="rounded-full border border-border px-4 py-2">
                  {PROFILE.role}
                </span>
                <span className="rounded-full border border-border px-4 py-2">
                  {PROFILE.subject}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {ABOUT.map((item, i) => (
              <Reveal key={item.title} delay={0.1 * (i + 1)}>
                <div className="glass-panel group relative rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:glow-soft sm:p-7">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-2xl bg-secondary/70 text-lilac">
                    {i === 0 ? <Film className="size-5" /> : <Sparkles className="size-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
