import Container from "@/components/ui/Container";
import { footerLinks } from "@/data/site";
import Brand from "./Brand";

const columnHeading =
  "mb-4 font-display text-[0.85rem] uppercase tracking-[0.16em] text-surface";
const linkClass = "text-[0.92rem] text-surface/74 hover:text-amber";

export default function Footer() {
  return (
    <footer className="border-t border-surface/14 bg-ink text-surface/74">
      <p className="mx-auto max-w-[900px] px-6 pt-24 text-center font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold tracking-[-0.01em] text-surface">
        &quot;Building Nepal&apos;s Future with{" "}
        <span className="text-amber">Innovation, Quality &amp; Trust.</span>
        &quot;
      </p>

      <Container>
        <div className="grid gap-12 py-16 min-[901px]:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-[300px] text-[0.92rem]">
              16 specialized companies providing complete construction solutions
              under one umbrella.
            </p>
          </div>

          <div>
            <h4 className={columnHeading}>Quick Links</h4>
            <ul className="grid list-none gap-2">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={columnHeading}>Divisions</h4>
            <ul className="grid list-none gap-2">
              {footerLinks.divisions.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="border-t border-surface/14 py-6 text-center text-[0.82rem]">
          © 2082 B.S. Group of Smart Nirman · Kathmandu, Nepal · All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
