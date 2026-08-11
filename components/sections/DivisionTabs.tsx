"use client";

import { useState } from "react";
import { divisions } from "@/data/divisions";
import CompanyCard from "./CompanyCard";

export default function DivisionTabs() {
  const [active, setActive] = useState(divisions[0].id);

  return (
    <>
      <div
        className="mb-12 flex flex-wrap gap-2.5"
        role="tablist"
        aria-label="Business divisions"
      >
        {divisions.map((division) => {
          const { icon: Icon } = division;
          const selected = division.id === active;

          return (
            <button
              key={division.id}
              type="button"
              role="tab"
              id={`tab-${division.id}`}
              aria-selected={selected}
              aria-controls={division.id}
              onClick={() => setActive(division.id)}
              className={`inline-flex min-h-[46px] cursor-pointer items-center gap-[9px] rounded-full border px-5 font-display text-[0.88rem] font-semibold transition-[color,border-color,background-color] duration-200 ${
                selected
                  ? "border-amber bg-amber text-ink"
                  : "border-surface/14 bg-transparent text-surface/74 hover:border-amber hover:text-amber"
              }`}
            >
              <Icon className="size-[17px] shrink-0" />
              {division.label}
            </button>
          );
        })}
      </div>

      {divisions.map((division) => (
        <div
          key={division.id}
          id={division.id}
          role="tabpanel"
          aria-labelledby={`tab-${division.id}`}
          hidden={division.id !== active}
          className={division.id === active ? "block animate-panel-in" : ""}
        >
          <p className="mb-8 max-w-[640px] text-surface/74">{division.intro}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-6">
            {division.companies.map((company) => (
              <CompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
