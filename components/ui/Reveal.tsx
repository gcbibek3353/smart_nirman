"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Fades + lifts its content into view once, mirroring the original
 * IntersectionObserver reveal (threshold .12, staggered by index).
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  index = 0,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  index?: number;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setShown(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${Math.min(index, 4) * 70}ms` }}
      className={`transition-[opacity,transform] duration-600 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
