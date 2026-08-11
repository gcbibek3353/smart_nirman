"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Vertical rail whose amber fill tracks how far the reader has scrolled
 * through the milestone list.
 */
export default function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const value = (window.innerHeight * 0.65 - rect.top) / rect.height;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-[900px] py-4">
      <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-surface/14 min-[761px]:left-1/2 min-[761px]:-translate-x-1/2">
        <div
          className="absolute left-0 top-0 w-full bg-amber transition-[height] duration-100 ease-linear"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      {children}
    </div>
  );
}
