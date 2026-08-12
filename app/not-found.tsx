import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return <section className="not-found"><div><p className="eyebrow">404 — Page not found</p><h1>This page isn&apos;t in the market.</h1><p>The link may be outdated, or the page may have moved.</p><ButtonLink href="/">Return home</ButtonLink></div></section>;
}
