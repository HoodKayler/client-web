import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-mark ${light ? "brand-mark-light" : ""}`}
      aria-label="TCMS Limited home"
    >
      <span className="brand-monogram" aria-hidden="true">T</span>
      <span className="brand-copy">
        <strong>TCMS</strong>
        <small>Trade &amp; Consumer Marketing</small>
      </span>
    </Link>
  );
}
