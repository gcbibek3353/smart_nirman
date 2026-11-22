import Image from "next/image";
import logo from "@/app/assets/logo.png";

export default function Brand({ className = "" }: { className?: string }) {
  return (
    <a
      href="#home"
      aria-label="Group of Smart Nirman — home"
      className={`flex items-center gap-3 text-surface ${className}`}
    >
      <span className="shrink-0 rounded-md bg-white px-1.5 py-1">
        <Image
          src={logo}
          alt=""
          sizes="80px"
          className="h-12 w-auto"
        />
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
