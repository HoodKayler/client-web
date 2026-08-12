import { ButtonLink } from "@/components/ui/button-link";

export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">Let&apos;s build what&apos;s next</p>
          <h2>Ready to move your brand closer to the market?</h2>
        </div>
        <div className="cta-copy">
          <p>Tell us where you want to grow. We&apos;ll help shape a practical path from strategy to execution.</p>
          <ButtonLink href="/contact" variant="light">Start a conversation</ButtonLink>
        </div>
      </div>
    </section>
  );
}
