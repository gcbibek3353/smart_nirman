import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  children,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-12 max-w-[720px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.01em]">
        {title}
      </h2>
      {children ? (
        <p className={`mt-4 ${dark ? "text-surface/74" : "text-ink/72"}`}>
          {children}
        </p>
      ) : null}
    </Reveal>
  );
}
