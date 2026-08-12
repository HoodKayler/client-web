import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TCMS Limited, our experience in the Nigerian market, mission, vision, values, and managing director Udo Anya.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About TCMS" title="People, market knowledge, and a bias for action." description="A full-service marketing and distribution solutions company helping brands connect, execute, and grow." />
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-copy">
            <SectionHeading eyebrow="Who we are" title="A practical growth partner for brands in motion." />
            <p>At TCMS Limited, we are committed to helping brands connect with customers, strengthen trade relationships, and achieve measurable growth.</p>
            <p>For over a decade, we have partnered with leading local and international brands to deliver end-to-end trade and consumer marketing — from strategy and activation to logistics and market execution.</p>
            <p>Our team combines industry experience, creative thinking, and data-informed insight. We understand the Nigerian market landscape, the dynamics of retail and distribution, and what it takes to win on the shelf and in consumers&apos; minds.</p>
          </div>
          <div className="story-image">
            <Image src="/images/about-team.png" alt="TCMS team members gathered around a meeting table" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <article><span>Our mission</span><h2>To provide exceptional marketing and distribution solutions that empower brands to grow, connect, and lead in their markets.</h2></article>
          <article><span>Our vision</span><h2>To be the preferred partner for trade and consumer marketing excellence across Nigeria and Sub-Saharan Africa.</h2></article>
        </div>
      </section>

      <section className="section leadership-section">
        <div className="container leadership-grid">
          <div className="leader-image"><Image src="/images/udo-anya.png" alt="Udo Anya, Managing Director of TCMS Limited" fill sizes="(max-width: 700px) 90vw, 34vw" /></div>
          <div className="leader-copy">
            <p className="eyebrow">Leadership</p>
            <h2>Udo Anya</h2>
            <p className="leader-role">Managing Director</p>
            <p>Udo is a seasoned business leader with over 25 years of experience in sales, trade marketing, and general management across West Africa.</p>
            <p>He has worked with multinationals including Unilever, Reckitt Benckiser, Guinness, and SABMiller, leading teams that delivered growth. Deeply familiar with the Nigerian FMCG landscape, Udo combines strategic insight with hands-on market expertise.</p>
            <p>He holds a B.Sc. in Business Administration from the University of Lagos and has completed MBA coursework at Bayero University, Kano.</p>
          </div>
        </div>
      </section>

      <section className="section values-page-section">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="The standard behind the work." description="Four principles define how we operate — within our team, with clients, and across every project." />
          <div className="values-page-grid">
            {values.map((value) => { const Icon = value.icon; return <article key={value.title}><Icon aria-hidden="true" /><h3>{value.title}</h3><p>{value.description}</p><span><Check aria-hidden="true" size={15} /> Built into every engagement</span></article>; })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
