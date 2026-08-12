import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link className={`button button-${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
    </Link>
  );
}
