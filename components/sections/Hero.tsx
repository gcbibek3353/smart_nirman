import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import HeroArt from "./HeroArt";

const statClass =
  "block font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-none text-surface";
const statLabel =
  "text-[0.8rem] uppercase tracking-[0.12em] text-surface/74";

export default function Hero() {
  return (
    <section
      id="home"
      className="blueprint-grid relative flex min-h-screen items-center bg-ink bg-[radial-gradient(1000px_500px_at_80%_10%,rgba(46,94,126,0.28),transparent_60%),radial-gradient(700px_420px_at_10%_90%,rgba(232,163,23,0.12),transparent_60%)] pb-24 pt-[140px] text-surface"
    >
      <Container className="relative z-[1] grid items-center gap-16 min-[901px]:grid-cols-[1.25fr_0.75fr]">
        <div>
          <Eyebrow>Inspired by Group of Smart Nirman</Eyebrow>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.12] tracking-[-0.01em]">
            Building Nepal&apos;s Future with{" "}
            <span className="text-amber">Innovation, Quality &amp; Trust.</span>
          </h1>
          <p className="mb-12 mt-6 max-w-[560px] text-[1.12rem] text-surface/74">
            16 specialized companies. 7 business divisions. One integrated
            construction group — since 2069 B.S.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#divisions">Explore Our Divisions</ButtonLink>
            <ButtonLink href="#journey" variant="outline">
              Our Journey
            </ButtonLink>
          </div>

          <div className="mt-16 grid max-w-[560px] grid-cols-3 gap-4">
            <div className="border-l-2 border-amber pl-4">
              <b className={statClass}>
                <Counter target={16} />
              </b>
              <span className={statLabel}>Companies</span>
            </div>
            <div className="border-l-2 border-amber pl-4">
              <b className={statClass}>
                <Counter target={7} />
              </b>
              <span className={statLabel}>Divisions</span>
            </div>
            <div className="border-l-2 border-amber pl-4">
              <b className={statClass}>
                <Counter target={14} />+
              </b>
              <span className={statLabel}>Years</span>
            </div>
          </div>
        </div>

        <HeroArt />
      </Container>

      <p className="scroll-drip absolute bottom-[26px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] text-surface/74">
        Scroll
      </p>
    </section>
  );
}
