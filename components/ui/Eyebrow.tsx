import type { ReactNode } from "react";

/** Small uppercase kicker with the amber rule in front of it. */
export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-display text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-amber before:h-0.5 before:w-[34px] before:shrink-0 before:bg-amber before:content-['']">
      {children}
    </p>
  );
}
