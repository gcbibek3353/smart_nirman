import { divisionOptions } from "@/data/site";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "w-full min-h-12 rounded-md border border-surface/14 bg-ink px-3.5 py-3 font-body text-[0.95rem] text-surface focus:border-amber";
const labelClass =
  "mb-2 block font-display text-[0.85rem] font-semibold text-surface";

export default function ContactForm() {
  return (
    <form
      noValidate
      className="rounded-card border border-surface/14 bg-ink-soft p-8"
    >
      <div className="mb-6">
        <label htmlFor="f-name" className={labelClass}>
          Full name
        </label>
        <input
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="f-contact" className={labelClass}>
          Email or phone
        </label>
        <input
          id="f-contact"
          name="contact"
          type="text"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="f-division" className={labelClass}>
          Division of interest
        </label>
        <select
          id="f-division"
          name="division"
          defaultValue={divisionOptions[0]}
          className={fieldClass}
        >
          {divisionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="f-msg" className={labelClass}>
          Message
        </label>
        <textarea
          id="f-msg"
          name="message"
          required
          className={`${fieldClass} min-h-[120px] resize-y`}
        />
      </div>

      <Button type="button" className="w-full">
        Send inquiry
      </Button>
      <p className="mt-4 text-[0.8rem] text-surface/74">
        Prototype form — submissions are not sent yet.
      </p>
    </form>
  );
}
