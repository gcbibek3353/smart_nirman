import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { contact } from "@/data/site";
import ContactForm from "./ContactForm";

const itemClass = "mt-6 flex items-start gap-4";
const iconClass = "mt-[3px] size-5 shrink-0 text-amber";
const headingClass = "block font-display text-[0.95rem] text-surface";
const bodyClass = "text-[0.95rem] text-surface/74";

export default function Contact() {
  return (
    <section
      id="contact"
      className="blueprint-grid relative bg-ink py-24 text-surface"
    >
      <Container className="relative z-[1]">
        <SectionHead eyebrow="Contact" title="Let's build together." dark />

        <div className="grid gap-16 min-[901px]:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className={itemClass}>
              <MapPinIcon className={iconClass} />
              <div>
                <b className={headingClass}>Head Office</b>
                <span className={bodyClass}>{contact.office}</span>
              </div>
            </div>

            <div className={itemClass}>
              <MailIcon className={iconClass} />
              <div>
                <b className={headingClass}>Email</b>
                <a
                  href={`mailto:${contact.email}`}
                  className={`${bodyClass} hover:text-amber`}
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className={itemClass}>
              <PhoneIcon className={iconClass} />
              <div>
                <b className={headingClass}>Phone</b>
                <a
                  href={contact.phoneHref}
                  className={`${bodyClass} hover:text-amber`}
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal index={1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
