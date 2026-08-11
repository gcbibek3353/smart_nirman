import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

/** Shared stroke setup for every icon in the design. */
function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------- navigation ---------- */

export const MenuIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Icon>
);

/* ---------- core values ---------- */

export const StarIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.8 5.5 21l2-7.5L2 9h7z" />
  </Icon>
);

export const BulbIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
  </Icon>
);

export const CheckIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M20 6L9 17l-5-5" />
  </Icon>
);

export const BriefcaseIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </Icon>
);

export const HeartIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l8.8 8.8 8.8-8.8a5.5 5.5 0 0 0 0-7.8z" />
  </Icon>
);

export const UsersIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

export const SustainabilityIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 22c4-4 8-7.6 8-12a8 8 0 1 0-16 0c0 4.4 4 8 8 12z" />
    <path d="M8 10c2 1.5 6 1.5 8 0" />
  </Icon>
);

/* ---------- division tabs ---------- */

export const FactoryIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2 20h20M4 20V10l6 4v-4l6 4V6l6-2v16" />
  </Icon>
);

export const GlobeIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
  </Icon>
);

export const StoreIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9M9 20v-6h6v6" />
  </Icon>
);

export const ApplicationIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2 21h20M6 21V8l8-5v18M14 9l6 3v9M9 9h.01M9 13h.01M9 17h.01" />
  </Icon>
);

export const MonitorIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </Icon>
);

export const HospitalityIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 3v18M18 3c-2 1-3 3-3 6v4h3v8" />
  </Icon>
);

export const RealEstateIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M11 21v-4h2v4" />
  </Icon>
);

/* ---------- company cards ---------- */

export const PanelStackIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18" />
  </Icon>
);

export const RoofIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 12l9-8 9 8M5 10v10h14V10" />
  </Icon>
);

export const BoxSplitIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
  </Icon>
);

export const HouseDoorIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 12l9-8 9 8M5 10v10h14V10M9 20v-5h6v5" />
  </Icon>
);

export const ShopIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 9l1.5-5h15L21 9M3 9h18M3 9v11h18V9" />
  </Icon>
);

export const PanelSplitIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M3 12h6" />
  </Icon>
);

export const BuildingIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M2 21h20M6 21V8l8-5v18M14 9l6 3v9" />
  </Icon>
);

export const StructureIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
  </Icon>
);

export const WindowIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M12 3v18M4 12h16" />
  </Icon>
);

export const HouseIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14" />
  </Icon>
);

/* ---------- strengths ---------- */

export const GridIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </Icon>
);

export const LayersIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </Icon>
);

export const WrenchIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M14.7 6.3a5 5 0 0 0-6.6 6.6L3 18v3h3l5.1-5.1a5 5 0 0 0 6.6-6.6L15 12l-3-3z" />
  </Icon>
);

export const TeamIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
  </Icon>
);

/* ---------- contact ---------- */

export const MapPinIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 22c4-4 8-7.6 8-12a8 8 0 1 0-16 0c0 4.4 4 8 8 12z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

export const MailIcon = (props: IconProps) => (
  <Icon {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </Icon>
);

export const PhoneIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2.05z" />
  </Icon>
);
