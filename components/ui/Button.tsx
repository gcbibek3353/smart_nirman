import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-md border-2 border-transparent px-7 font-display text-[0.95rem] font-semibold min-h-12 transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px";

const variants = {
  amber: "bg-amber text-ink hover:bg-amber-deep",
  outline:
    "bg-transparent text-surface border-surface/14 hover:border-amber hover:text-amber",
} as const;

export type ButtonVariant = keyof typeof variants;

type LinkProps = { variant?: ButtonVariant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  variant = "amber",
  className = "",
  children,
  ...props
}: LinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

type ActionProps = { variant?: ButtonVariant; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "amber",
  className = "",
  children,
  ...props
}: ActionProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
