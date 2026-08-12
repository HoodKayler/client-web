import { ArrowDown } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-orb page-hero-orb-one" />
      <div className="page-hero-orb page-hero-orb-two" />
      <div className="container page-hero-inner">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="page-hero-bottom">
          <p>{description}</p>
          <ArrowDown aria-hidden="true" className="page-hero-arrow" />
        </div>
      </div>
    </section>
  );
}
