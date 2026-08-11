"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import Brand from "./Brand";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-ink shadow-[0_4px_20px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1200px] items-center justify-between px-6">
          <Brand />

          <nav aria-label="Primary">
            <ul className="hidden list-none items-center gap-1.5 min-[901px]:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded-md px-3.5 py-3 text-[0.92rem] font-medium text-surface transition-colors duration-200 hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <ButtonLink href="#contact" className="ml-2.5">
                  Get in Touch
                </ButtonLink>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid size-12 cursor-pointer place-items-center text-surface min-[901px]:hidden"
          >
            <MenuIcon width={26} height={26} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-2 bg-ink transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 font-display text-2xl font-semibold text-surface hover:text-amber"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
