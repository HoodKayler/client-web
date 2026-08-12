import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="service-grid">
      {items.map((service, index) => {
        const Icon = service.icon;
        return (
          <article className="service-card" key={service.title}>
            <div className="service-card-top">
              <span className="service-number">0{index + 1}</span>
              <span className="service-icon"><Icon aria-hidden="true" size={23} /></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <Link href="/services" aria-label={`Learn about ${service.title}`}>
              Explore service <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
