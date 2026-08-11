import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import DivisionTabs from "./DivisionTabs";

export default function Divisions() {
  return (
    <section
      id="divisions"
      className="blueprint-grid relative bg-ink py-24 text-surface"
    >
      <Container className="relative z-[1]">
        <SectionHead
          eyebrow="Business Divisions"
          title="7 divisions. 16 companies. Every stage of construction."
          dark
        />
        <DivisionTabs />
      </Container>
    </section>
  );
}
