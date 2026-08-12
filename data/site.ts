import {
  BarChart3,
  Boxes,
  Handshake,
  Lightbulb,
  MapPinned,
  Megaphone,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const site = {
  name: "TCMS Limited",
  legalName: "Trade and Consumer Marketing Services Limited",
  description:
    "Trade and consumer marketing solutions that help brands strengthen channels, connect with customers, and grow across Nigeria and Sub-Saharan Africa.",
  email: "info@tcmslimited.com",
  phonePrimary: "+234 805 328 2000",
  phoneSecondary: "+234 809 348 2000",
  phonePrimaryHref: "+2348053282000",
  phoneSecondaryHref: "+2348093482000",
  address: "No. 7 Adedotun Dina Street, Mende, Maryland, Lagos, Nigeria.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/projects" },
  { label: "About", href: "/about-us" },
];

export const services = [
  {
    title: "Marketing consulting",
    short: "Clear market strategies built around your brand, customers, and growth goals.",
    description:
      "We help teams turn market opportunities into focused trade and consumer plans, aligning strategy, channels, activation, and measurement.",
    outcomes: ["Go-to-market planning", "Channel strategy", "Campaign direction"],
    icon: Lightbulb,
  },
  {
    title: "Trade marketing",
    short: "Stronger relationships and sharper execution across retail and distribution channels.",
    description:
      "From trade promotions to in-market execution, we help brands improve visibility, partner engagement, and performance where purchase decisions happen.",
    outcomes: ["Trade promotions", "Retail execution", "Channel engagement"],
    icon: Handshake,
  },
  {
    title: "Consumer activation",
    short: "Human experiences that connect brands with the people they want to reach.",
    description:
      "We plan and deliver consumer-facing initiatives designed to build awareness, encourage trial, and create memorable brand interactions.",
    outcomes: ["Brand activation", "Product experiences", "Consumer engagement"],
    icon: Megaphone,
  },
  {
    title: "Territory development",
    short: "Structured expansion into new territories, neighbourhoods, and trade networks.",
    description:
      "We support brands as they assess, enter, and develop territories with coordinated field teams and market-aware execution.",
    outcomes: ["Territory mapping", "Route-to-market support", "Field coordination"],
    icon: MapPinned,
  },
  {
    title: "Distribution & logistics",
    short: "Coordinated movement and market delivery that keeps campaigns on track.",
    description:
      "Our distribution support connects campaign plans to practical market delivery, helping materials and products reach the right locations.",
    outcomes: ["Distribution management", "Activation logistics", "Market delivery"],
    icon: PackageCheck,
  },
  {
    title: "Research & audit services",
    short: "Ground-level insight to understand markets, measure execution, and improve decisions.",
    description:
      "We combine market research, field observation, and audits to give teams a clearer view of performance and opportunity.",
    outcomes: ["Market research", "Retail audits", "Performance insight"],
    icon: SearchCheck,
  },
];

export const values = [
  {
    title: "Excellence",
    description: "We pursue high standards and deliver work designed to exceed expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description: "We use fresh thinking to create smarter, more effective solutions.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We build trust through honesty, transparency, and accountability.",
    icon: Handshake,
  },
  {
    title: "Teamwork",
    description: "We believe meaningful results come from close, open collaboration.",
    icon: UsersRound,
  },
];

export const engagementTypes = [
  {
    number: "01",
    title: "Strategy to market",
    description:
      "Translate a growth objective into an executable trade and consumer plan, with roles, channels, and measures clearly defined.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Activation at scale",
    description:
      "Coordinate field teams, consumer touchpoints, materials, and logistics for consistent delivery across locations.",
    icon: UsersRound,
  },
  {
    number: "03",
    title: "Market expansion",
    description:
      "Assess and develop territories with practical route-to-market support and local execution knowledge.",
    icon: MapPinned,
  },
  {
    number: "04",
    title: "Insight to improvement",
    description:
      "Use research and audits to understand what is happening in-market, then turn findings into focused action.",
    icon: Boxes,
  },
];
