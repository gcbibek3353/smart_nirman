import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { badgeLabels, badgeStyles, milestones } from "@/data/milestones";
import Timeline from "./Timeline";

export default function Journey() {
  return (
    <section
      id="journey"
      className="blueprint-grid relative overflow-hidden bg-ink py-24 text-surface"
    >
      <Container className="relative z-[1]">
        <SectionHead eyebrow="Our Journey" title="From one company to sixteen." dark>
          Every year marker below is a company founded — a growth story written in
          Bikram Sambat, from a single trading house in 2069 to an integrated group
          in 2082.
        </SectionHead>

        <Timeline>
          {milestones.map((milestone, i) => {
            /* The original alternates sides: even indexes sit on the right. */
            const onRight = i % 2 === 0;

            return (
              <Reveal
                key={milestone.year + milestone.title}
                className="relative mb-8 grid grid-cols-[56px_1fr] items-center min-[761px]:mb-12 min-[761px]:grid-cols-[1fr_96px_1fr]"
              >
                <div
                  className={`col-start-2 row-start-1 ml-4 rounded-card border border-surface/14 bg-ink-soft p-6 text-left transition-[border-color,transform] duration-250 hover:-translate-y-[3px] hover:border-amber min-[761px]:ml-0 ${
                    onRight
                      ? "min-[761px]:col-start-3"
                      : "min-[761px]:col-start-1 min-[761px]:text-right"
                  }`}
                >
                  <span
                    className={`mb-2.5 inline-block rounded border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${
                      badgeStyles[milestone.badge]
                    }`}
                  >
                    {badgeLabels[milestone.badge]}
                  </span>
                  <h3 className="font-display text-[1.12rem] font-semibold leading-[1.12] tracking-[-0.01em] text-surface">
                    {milestone.title}
                    {milestone.titleSuffix ? (
                      <>
                        {" ·  "}
                        <span className="whitespace-nowrap">
                          {milestone.titleSuffix}
                        </span>
                      </>
                    ) : null}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] text-surface/74">
                    {milestone.description}
                  </p>
                </div>

                <span className="z-[2] col-start-1 row-start-1 self-start rounded-full border-4 border-ink bg-amber px-2.5 py-2 font-display text-[0.85rem] font-bold text-ink min-[761px]:col-start-2 min-[761px]:self-auto min-[761px]:justify-self-center min-[761px]:px-4 min-[761px]:py-2.5 min-[761px]:text-[1.05rem]">
                  {milestone.year}
                </span>
              </Reveal>
            );
          })}
        </Timeline>
      </Container>
    </section>
  );
}
