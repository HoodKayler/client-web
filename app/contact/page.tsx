import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TCMS Limited in Maryland, Lagos to discuss a trade marketing, consumer activation, distribution, research, or market execution project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s talk about where you want to grow." description="Share the opportunity, challenge, or market objective. Our team will help you identify the right next step." />
      <section className="section contact-section">
        <div className="container contact-grid">
          <aside className="contact-details">
            <p className="eyebrow">How can we help?</p>
            <h2>Start with a conversation.</h2>
            <p>Reach our Lagos team directly, or use the form to prepare a detailed project email.</p>
            <div className="contact-detail-list">
              <div><MapPin aria-hidden="true" /><span><small>Head office</small>{site.address}</span></div>
              <div><Phone aria-hidden="true" /><span><small>Call us</small><Link href={`tel:${site.phonePrimaryHref}`}>{site.phonePrimary}</Link><Link href={`tel:${site.phoneSecondaryHref}`}>{site.phoneSecondary}</Link></span></div>
              <div><Mail aria-hidden="true" /><span><small>Email</small><Link href={`mailto:${site.email}`}>{site.email}</Link></span></div>
            </div>
          </aside>
          <div className="form-panel">
            <div className="form-panel-heading"><p className="eyebrow">Project enquiry</p><h2>Tell us what you&apos;re working on.</h2></div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
