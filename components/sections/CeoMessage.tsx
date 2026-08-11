import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const letter = [
  "Welcome to Group of Smart Nirman.",
  "Our journey began with a single vision — to transform Nepal's construction industry by delivering quality products, modern technology, and professional services under one trusted group.",
  "From a single trading company established in 2069 B.S., we have grown into a diversified group of sixteen companies covering manufacturing, importing, wholesale, retail, construction, fabrication, IT, hospitality, and real estate development.",
  "Every project we undertake reflects our commitment to quality, innovation, integrity, and customer satisfaction.",
  "As Nepal continues to modernize, we remain dedicated to introducing new technologies, world-class products, and sustainable building solutions.",
  "Together with our valued customers, partners, employees, and stakeholders, we look forward to building a stronger and smarter Nepal.",
  "Thank you for your trust.",
];

export default function CeoMessage() {
  return (
    <section id="ceo" className="py-24">
      <Container>
        <SectionHead
          eyebrow="Message from the CEO"
          title="Building a smarter future, together."
        />

        <div className="grid items-start gap-16 min-[901px]:grid-cols-[0.85fr_1.15fr]">
          <Reveal
            role="img"
            aria-label="Portrait of Nabaraj Chaulagain, Chief Executive Officer"
            className="grid aspect-[4/5] max-w-[380px] place-items-center rounded-card border border-ink/12 bg-ink bg-[linear-gradient(160deg,rgba(46,94,126,0.35),rgba(26,29,33,0.9)),repeating-linear-gradient(45deg,rgba(232,163,23,0.06)_0_2px,transparent_2px_14px)] font-display text-[0.8rem] uppercase tracking-[0.14em] text-surface/74 min-[901px]:sticky min-[901px]:top-[110px] min-[901px]:max-w-none"
          >
            [ CEO portrait here ]
          </Reveal>

          <Reveal className="quote-mark relative pt-8 [&_p+p]:mt-4">
            <p className="font-semibold text-ink">
              Dear Friends, Partners and Customers,
            </p>
            {letter.map((paragraph) => (
              <p key={paragraph} className="text-ink/72">
                {paragraph}
              </p>
            ))}

            <div className="mt-8 border-t border-ink/12 pt-6">
              <div className="font-script text-[2.3rem] leading-none text-steel">
                Nabaraj Chaulagain
              </div>
              <b className="mt-1.5 block font-display">Nabaraj Chaulagain</b>
              <span className="text-[0.9rem] text-ink/72">
                Chief Executive Officer, Group of Smart Nirman
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
