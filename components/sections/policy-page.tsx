import Link from "next/link";
import { site } from "@/data/site";

type PolicySection = { title: string; paragraphs?: string[]; items?: string[] };

export function PolicyPage({ eyebrow, title, updated, intro, sections }: { eyebrow: string; title: string; updated: string; intro: string; sections: PolicySection[] }) {
  return (
    <section className="policy-page">
      <div className="container policy-grid">
        <aside>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>Last updated {updated}</p>
          <Link href={`mailto:${site.email}`}>Questions? Email us</Link>
        </aside>
        <article className="policy-content">
          <p className="policy-intro">{intro}</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
