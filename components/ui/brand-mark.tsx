import Link from "next/link";
import Image from "next/image";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-mark ${light ? "brand-mark-light" : ""}`}
      aria-label="TCMS Limited home"
    >
      <Image
        src="/images/tcms-logo-current.png"
        alt="TCMS Limited"
        width={2172}
        height={724}
        sizes={light ? "(max-width: 560px) 72vw, 300px" : "(max-width: 560px) 120px, 175px"}
        priority={!light}
        loading={light ? "eager" : undefined}
      />
    </Link>
  );
}
