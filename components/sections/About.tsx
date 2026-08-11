import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import {
  BriefcaseIcon,
  BulbIcon,
  CheckIcon,
  HeartIcon,
  StarIcon,
  SustainabilityIcon,
  UsersIcon,
} from "@/components/icons";

const bento = [
  { value: "16", label: "Specialized Companies", amber: true },
  { value: "7", label: "Business Divisions" },
  { value: "NPL", label: "Nationwide Supply Network" },
  { value: "MFG", label: "Manufacturing Excellence" },
];

const values = [
  { label: "Integrity", Icon: StarIcon },
  { label: "Innovation", Icon: BulbIcon },
  { label: "Quality", Icon: CheckIcon },
  { label: "Professionalism", Icon: BriefcaseIcon },
  { label: "Customer First", Icon: HeartIcon },
  { label: "Teamwork", Icon: UsersIcon },
  { label: "Sustainability", Icon: SustainabilityIcon },
];

const mission = [
  "Deliver premium quality construction materials.",
  "Expand manufacturing within Nepal.",
  "Introduce innovative building technologies.",
  "Provide end-to-end construction solutions.",
  "Build long-term partnerships based on trust and quality.",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHead
          eyebrow="About the Group"
          title="One group. Complete construction solutions."
        />

        <div className="grid items-start gap-16 min-[901px]:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="[&_p+p]:mt-4">
            <p className="text-ink/72">
              Established in <strong>2069 B.S.</strong>, Group of Smart Nirman is
              one of Nepal&apos;s emerging integrated construction business
              groups. Over the years, the Group has expanded from a single
              company into a diversified organization operating across
              manufacturing, importing, wholesale, retail, project execution,
              information technology, hospitality, and real estate development.
            </p>
            <p className="text-ink/72">
              The Group currently consists of{" "}
              <strong>16 specialized companies</strong> working together to
              provide complete construction solutions under one umbrella. From
              supplying world-class building materials to executing large-scale
              construction and interior projects, Group of Smart Nirman continues
              to contribute to the modernization of Nepal&apos;s construction
              industry.
            </p>
            <p className="text-ink/72">
              Our business philosophy is based on{" "}
              <strong>
                Quality, Innovation, Integrity, and Customer Satisfaction.
              </strong>
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4">
            {bento.map((cell) => (
              <div
                key={cell.label}
                className={`rounded-card border p-6 shadow-card ${
                  cell.amber
                    ? "border-amber bg-amber"
                    : "border-ink/12 bg-card"
                }`}
              >
                <b className="block font-display text-[2.2rem] font-bold leading-none text-ink">
                  {cell.value}
                </b>
                <span
                  className={`text-[0.85rem] font-medium uppercase tracking-[0.06em] ${
                    cell.amber ? "text-ink" : "text-ink/72"
                  }`}
                >
                  {cell.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 min-[901px]:grid-cols-2">
          <Reveal className="rounded-card border-t-4 border-steel bg-card p-8 shadow-card">
            <h3 className="mb-4 font-display text-[1.3rem] font-semibold leading-[1.12] tracking-[-0.01em]">
              Vision
            </h3>
            <p className="text-ink/72">
              To become Nepal&apos;s most trusted and innovative integrated
              construction group by providing complete building solutions with
              international quality standards.
            </p>
          </Reveal>

          <Reveal
            index={1}
            className="rounded-card border-t-4 border-amber bg-card p-8 shadow-card"
          >
            <h3 className="mb-4 font-display text-[1.3rem] font-semibold leading-[1.12] tracking-[-0.01em]">
              Mission
            </h3>
            <ul className="grid list-none gap-2">
              {mission.map((item) => (
                <li
                  key={item}
                  className="relative pl-[22px] text-ink/72 before:absolute before:left-0 before:top-[0.55em] before:h-0.5 before:w-2.5 before:bg-amber before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          className="mt-12 flex flex-wrap gap-3"
          aria-label="Core values"
        >
          {values.map(({ label, Icon }) => (
            <span
              key={label}
              className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-ink/12 bg-card px-5 py-2.5 text-[0.92rem] font-medium transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-amber"
            >
              <Icon className="size-4 shrink-0 text-amber" />
              {label}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
