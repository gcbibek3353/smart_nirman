import type { Company } from "@/data/divisions";

export default function CompanyCard({ company }: { company: Company }) {
  const { icon: Icon } = company;

  return (
    <article className="rounded-card border border-surface/14 bg-ink-soft p-6 transition-[transform,border-color,box-shadow] duration-250 hover:-translate-y-1 hover:border-amber hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <h3 className="flex items-center gap-2.5 font-display text-[1.3rem] font-semibold leading-[1.12] tracking-[-0.01em] text-surface">
        <Icon className="size-[18px] shrink-0 text-amber" strokeLinecap="butt" />
        {company.name}
      </h3>

      <p className="mb-3.5 mt-2 text-[0.9rem] text-surface/74">
        {company.tagline}
      </p>

      {company.groups?.map((group) => (
        <div key={group.heading}>
          <h4 className="mb-2 mt-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber">
            {group.heading}
          </h4>
          <ul className="grid list-none gap-1.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="relative pl-[18px] text-[0.88rem] text-surface/74 before:absolute before:left-0 before:top-[0.6em] before:h-0.5 before:w-2 before:bg-steel-soft before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}
