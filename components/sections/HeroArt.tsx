import Image from "next/image";
import heroImage from "@/app/assets/heroImage.png";

/** Team photo shown beside the hero copy. */
export default function HeroArt() {
  return (
    <Image
      src={heroImage}
      alt="The Group of Smart Nirman leadership team"
      placeholder="blur"
      loading="eager"
      fetchPriority="high"
      sizes="(min-width: 1200px) 620px, (min-width: 901px) 52vw, 100vw"
      className="h-auto w-full rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
    />
  );
}
