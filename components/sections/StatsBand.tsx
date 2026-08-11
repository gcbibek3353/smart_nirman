import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import { scopeOfBusiness } from "@/data/site";

const value =
  "block font-display text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none text-ink";
const label =
  "text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-ink/75";

export default function StatsBand() {
  return (
    <div className="bg-amber py-16" role="region" aria-label="Group statistics">
      <Container>
        <div className="flex flex-wrap justify-center gap-24 text-center">
          <div>
            <b className={value}>
              <Counter target={16} />
            </b>
            <span className={label}>Companies</span>
          </div>
          <div>
            <b className={value}>
              <Counter target={7} />
            </b>
            <span className={label}>Business Divisions</span>
          </div>
          <div>
            <b className={value}>
              <Counter target={14} />+
            </b>
            <span className={label}>Years of Growth</span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-y-2 font-display text-[0.9rem] font-semibold tracking-[0.04em] text-ink">
          {scopeOfBusiness.map((item, i) => (
            <span
              key={item}
              className={`px-[18px] ${
                i < scopeOfBusiness.length - 1
                  ? "border-r-2 border-ink/25"
                  : ""
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
