export default function Brand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#home"
      aria-label="Group of Smart Nirman — home"
      className={`flex items-center gap-3 text-surface ${className}`}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-md border-2 border-amber font-display text-[1.05rem] font-bold text-amber">
        SN
      </span>
      <span className="font-display text-base font-semibold leading-[1.2]">
        Group of Smart Nirman
        <small className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-surface/74">
          Since 2069 B.S.
        </small>
      </span>
    </a>
  );
}
