import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navigation, site } from "@/data/site";
import { BrandMark } from "@/components/ui/brand-mark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-lead">
          <BrandMark light />
          <p>{site.description}</p>
          <Link className="footer-email" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column footer-contact-list">
          <p className="footer-label">Head office</p>
          <p><MapPin aria-hidden="true" size={17} />{site.address}</p>
          <Link href={`tel:${site.phonePrimaryHref}`}><Phone aria-hidden="true" size={17} />{site.phonePrimary}</Link>
          <Link href={`mailto:${site.email}`}><Mail aria-hidden="true" size={17} />{site.email}</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} {site.legalName}</p>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
          <Link href="/accessibility-statement">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
