export type BadgeKind = "wholesale" | "factory" | "application" | "retail";

export type Milestone = {
  year: string;
  badge: BadgeKind;
  title: string;
  /** Names rendered with a non-breaking treatment after the "·" separator. */
  titleSuffix?: string;
  description: string;
};

export const badgeStyles: Record<BadgeKind, string> = {
  wholesale: "bg-steel/25 text-[#8FC1E3] border-[#8FC1E3]/35",
  factory: "bg-amber/16 text-amber border-amber/40",
  application: "bg-[#78BE78]/14 text-[#9AD49A] border-[#9AD49A]/35",
  retail: "bg-[#DC96C8]/13 text-[#E0AFD4] border-[#E0AFD4]/32",
};

export const badgeLabels: Record<BadgeKind, string> = {
  wholesale: "Wholesale",
  factory: "Factory",
  application: "Application",
  retail: "Retail",
};

export const milestones: Milestone[] = [
  {
    year: "2069",
    badge: "wholesale",
    title: "False Ceiling House",
    description:
      "The founding company — where the Group's story begins, specializing in ceiling and partition systems.",
  },
  {
    year: "2071",
    badge: "factory",
    title: "Smart Ceiling Industries",
    description:
      "First step into manufacturing — ceiling framing systems made in Nepal.",
  },
  {
    year: "2072",
    badge: "wholesale",
    title: "Nirman Sansar",
    description:
      "Expanding into roofing, windows, doors, and uPVC industry solutions.",
  },
  {
    year: "2073",
    badge: "application",
    title: "False Ceiling Solution",
    description:
      "From supplying materials to installing them — ceiling, partition, ACP, and cladding works.",
  },
  {
    year: "2075",
    badge: "application",
    title: "Interior World",
    titleSuffix: "Smart Nirman Samagri",
    description:
      "Turnkey interior design projects, alongside a new retail outlet for finishing materials.",
  },
  {
    year: "2076",
    badge: "application",
    title: "Naya Nirman Construction",
    description:
      "Full-scale construction — residential, commercial, government, and prefab projects.",
  },
  {
    year: "2077",
    badge: "retail",
    title: "False Ceiling Tradelink",
    description:
      "Bringing complete ceiling & partition materials directly to retail customers.",
  },
  {
    year: "2081",
    badge: "application",
    title: "Nirman Solution Hub",
    titleSuffix: "Nirman Windoor System",
    description:
      "Steel structures, soundproofing, curtain walls, and heavy aluminum window systems.",
  },
  {
    year: "2082",
    badge: "factory",
    title: "Smart Panel Nepal",
    titleSuffix: "Smart Insulated Roofing",
    description:
      "Modern sandwich panels and insulated roofing — manufactured in Nepal, for Nepal.",
  },
];
