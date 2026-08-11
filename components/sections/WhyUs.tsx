import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import {
  FactoryIcon,
  GlobeIcon,
  GridIcon,
  HeartIcon,
  LayersIcon,
  StarIcon,
  TeamIcon,
  WrenchIcon,
} from "@/components/icons";

const strengths = [
  { label: "16 Specialized Companies", Icon: GridIcon },
  { label: "7 Business Divisions", Icon: LayersIcon },
  { label: "Manufacturing Excellence", Icon: FactoryIcon },
  { label: "Nationwide Supply Network", Icon: GlobeIcon },
  { label: "Modern Construction Technologies", Icon: WrenchIcon },
  { label: "Skilled Technical Team", Icon: TeamIcon },
  { label: "Customer-Centric Approach", Icon: HeartIcon },
  { label: "Commitment to Quality & Innovation", Icon: StarIcon },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24">
      <Container>
        <SectionHead
          eyebrow="Why Group of Smart Nirman"
          title="One Group — Complete Construction Solutions."
        >
          Our integrated business model enables us to support every stage of a
          construction project.
        </SectionHead>

        <div className="grid grid-cols-2 gap-4 min-[1001px]:grid-cols-4">
          {strengths.map(({ label, Icon }, i) => (
            <Reveal
              key={label}
              index={i}
              className="rounded-card border border-ink/12 bg-card p-6 transition-[transform,box-shadow,border-color] duration-250 hover:-translate-y-1 hover:border-amber hover:shadow-lift"
            >
              <Icon className="mb-3.5 size-[26px] text-amber" />
              <b className="block font-display text-base leading-[1.3]">
                {label}
              </b>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
