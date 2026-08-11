import type { ComponentType } from "react";
import {
  ApplicationIcon,
  BoxSplitIcon,
  BuildingIcon,
  FactoryIcon,
  GlobeIcon,
  HospitalityIcon,
  HouseDoorIcon,
  HouseIcon,
  MenuIcon,
  MonitorIcon,
  PanelSplitIcon,
  PanelStackIcon,
  RealEstateIcon,
  RoofIcon,
  ShopIcon,
  StoreIcon,
  StructureIcon,
  WindowIcon,
  type IconProps,
} from "@/components/icons";

export type Company = {
  name: string;
  icon: ComponentType<IconProps>;
  tagline: string;
  /** Optional grouped product/service lists, rendered under amber sub-headings. */
  groups?: { heading: string; items: string[] }[];
};

export type Division = {
  id: string;
  label: string;
  icon: ComponentType<IconProps>;
  intro: string;
  companies: Company[];
};

export const divisions: Division[] = [
  {
    id: "p-factory",
    label: "Factory",
    icon: FactoryIcon,
    intro:
      "Manufacturing ceiling framing systems, sandwich panels, and modern insulated roofing products — made in Nepal.",
    companies: [
      {
        name: "Smart Ceiling Industries",
        icon: FactoryIcon,
        tagline: "Ceiling framing systems manufactured to international standards.",
        groups: [
          {
            heading: "Products",
            items: [
              "Ceiling Framing Channels",
              "Partition Framing Systems",
              "Metal Profiles",
              "Accessories",
            ],
          },
        ],
      },
      {
        name: "Smart Panel Nepal",
        icon: PanelStackIcon,
        tagline: "Sandwich panels and prefabricated building systems.",
        groups: [
          {
            heading: "Products",
            items: [
              "EPS Sandwich Panels",
              "PU Sandwich Panels",
              "Rockwool Panels",
              "Prefabricated Building Systems",
            ],
          },
        ],
      },
      {
        name: "Smart Insulated Roofing",
        icon: RoofIcon,
        tagline: "Modern insulated roofing systems for a new Nepal.",
        groups: [
          {
            heading: "Products",
            items: [
              "PU Roofing Panels",
              "PIR Roofing Panels",
              "Modern Insulated Roofing Systems",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "p-wholesale",
    label: "Wholesale",
    icon: GlobeIcon,
    intro:
      "Importing and distributing world-class building materials across Nepal through a nationwide supply network.",
    companies: [
      {
        name: "False Ceiling House",
        icon: BoxSplitIcon,
        tagline:
          "The Group's founding company — complete ceiling, partition, and acoustic material wholesale.",
        groups: [
          {
            heading: "Ceiling Systems",
            items: [
              "Gypsum Ceiling",
              "Mineral Fiber Ceiling",
              "Metal Ceiling",
              "PVC Ceiling",
            ],
          },
          {
            heading: "Partition Systems",
            items: [
              "Gypsum Partition",
              "Cement Board Partition",
              "Calcium Silicate Board",
              "Fiber Cement Board",
            ],
          },
          {
            heading: "Soundproof Solutions",
            items: [
              "Rockwool & Glasswool",
              "Acoustic Boards & Panels",
              "Acoustic Ceiling Systems",
            ],
          },
          {
            heading: "PVC & WPC",
            items: [
              "PVC Wall Panels",
              "WPC Wall Panels & Decking",
              "Decorative Wall Solutions",
            ],
          },
        ],
      },
      {
        name: "Nirman Sansar",
        icon: HouseDoorIcon,
        tagline:
          "Roofing, window & door systems, and complete uPVC industry solutions.",
        groups: [
          {
            heading: "Roofing Solutions",
            items: [
              "uPVC Roofing",
              "Decra Roofing",
              "Shingles Roofing",
              "Insulated Roofing Panels",
            ],
          },
          {
            heading: "Window & Door Systems",
            items: ["Aluminum Windows & Doors", "uPVC Windows & Doors"],
          },
          {
            heading: "uPVC Industry Solutions",
            items: [
              "uPVC Profiles",
              "Hardware",
              "Fabrication Machines",
              "Fabrication Tools & Accessories",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "p-retail",
    label: "Retail",
    icon: StoreIcon,
    intro:
      "Providing complete construction materials directly to customers through dedicated retail outlets.",
    companies: [
      {
        name: "False Ceiling Tradelink",
        icon: ShopIcon,
        tagline: "Retail outlet for complete ceiling & partition materials.",
      },
      {
        name: "Smart Nirman Samagri",
        icon: ShopIcon,
        tagline: "Retail outlet for complete building finishing materials.",
      },
      {
        name: "Nawa Nirman Sansar",
        icon: ShopIcon,
        tagline:
          "Retail outlet for roofing, windows, doors and construction products.",
      },
    ],
  },
  {
    id: "p-application",
    label: "Application",
    icon: ApplicationIcon,
    intro:
      "From interior design to steel structures — the Group's project-execution arm delivers construction and installation end to end.",
    companies: [
      {
        name: "Interior World",
        icon: PanelSplitIcon,
        tagline: "Interior Design & Turnkey Projects",
      },
      {
        name: "False Ceiling Solution",
        icon: MenuIcon,
        tagline: "Ceiling · Partition · ACP · Cladding · Fabrication",
      },
      {
        name: "Naya Nirman Construction",
        icon: BuildingIcon,
        tagline: "Residential · Commercial · Government · Prefab Construction",
      },
      {
        name: "Nirman Solution Hub",
        icon: StructureIcon,
        tagline: "Steel Structure · Soundproofing · Specialized Construction Works",
      },
      {
        name: "Nirman Windoor System",
        icon: WindowIcon,
        tagline: "Heavy aluminum window & door engineering.",
        groups: [
          {
            heading: "Specialities",
            items: [
              "Heavy Aluminum Windows & Doors",
              "Curtain Wall",
              "Spider Glazing",
              "Structural Glazing",
              "Automatic Door Systems",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "p-it",
    label: "IT Solutions",
    icon: MonitorIcon,
    intro:
      "Digital transformation for modern businesses — built by the Group's own technology company.",
    companies: [
      {
        name: "Swash Technology",
        icon: MonitorIcon,
        tagline: "ERP, software, and digital services for growing businesses.",
        groups: [
          {
            heading: "Services",
            items: [
              "ERP Software",
              "Inventory Management",
              "Mobile Apps",
              "Websites",
              "Cloud Solutions",
              "Digital Marketing",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "p-hospitality",
    label: "Hospitality",
    icon: HospitalityIcon,
    intro: "A modern hospitality venture serving families, corporates, and events.",
    companies: [
      {
        name: "Gokarna House Restro",
        icon: HospitalityIcon,
        tagline: "Modern dining and event hosting in Kathmandu.",
        groups: [
          {
            heading: "Services",
            items: [
              "Restaurant",
              "Family Dining",
              "Corporate Meetings",
              "Events & Catering",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "p-realestate",
    label: "Land & Building",
    icon: RealEstateIcon,
    intro: "Developing the spaces Nepal will live and work in tomorrow.",
    companies: [
      {
        name: "Smart Developers Nepal",
        icon: HouseIcon,
        tagline: "Residential, commercial, and land development projects.",
        groups: [
          {
            heading: "Services",
            items: [
              "Housing Projects",
              "Apartment Development",
              "Commercial Buildings",
              "Land Development",
              "Real Estate Investment",
            ],
          },
        ],
      },
    ],
  },
];
