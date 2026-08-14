import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/sections/cta-section";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TCMS marketing consulting, trade marketing, consumer activation, territory development, distribution, research, and audit services.",
};

const serviceImages = [
  "/images/service-strategy-latest.png",
  "/images/service-territory-latest.png",
  "/images/service-research-latest.png",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Built around the way markets really move." description="Connected services for brands that need strategy, execution, and insight to work as one." />
      <section className="section services-detail-intro">
        <div className="container">
          <div className="split-heading">
            <SectionHeading eyebrow="Our capabilities" title="From commercial challenge to coordinated action." />
            <p>Every engagement is shaped around the goal. Choose a focused capability or bring TCMS in as an end-to-end partner.</p>
          </div>
          <div className="service-detail-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article className="service-detail" key={service.title}>
                  <div className="service-detail-title"><span>0{index + 1}</span><Icon aria-hidden="true" /><h3>{service.title}</h3></div>
                  <p>{service.description}</p>
                  <ul>{service.outcomes.map((outcome) => <li key={outcome}><Check aria-hidden="true" size={16} />{outcome}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section service-gallery-section">
        <div className="container">
          <SectionHeading eyebrow="In the market" title="Strategy is only useful when it can be executed." description="Our work connects the boardroom view with the realities of channels, territories, teams, and consumers." />
          <div className="service-gallery">
            {serviceImages.map((src, index) => (
              <div className={`service-gallery-item item-${index + 1}`} key={src}>
                <Image src={src} alt={["TCMS team developing a market strategy", "Market team reviewing territory data", "Research team interpreting market performance"][index]} fill quality={90} sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
