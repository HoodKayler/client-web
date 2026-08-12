import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/policy-page";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms governing access to and use of the TCMS Limited website." };

export default function TermsPage() {
  return <PolicyPage eyebrow="Website information" title="Terms & conditions" updated="12 August 2026" intro="These terms apply to your use of the TCMS Limited website. By using the site, you agree to use it lawfully and in a way that does not interfere with others or the service." sections={[
    { title: "Website purpose", paragraphs: ["This website provides general information about Trade and Consumer Marketing Services Limited and its capabilities. Website content is not a binding proposal, guarantee, or professional advice. The scope and terms of any client engagement are established separately in writing."] },
    { title: "Acceptable use", items: ["Do not attempt to disrupt, damage, or gain unauthorised access to the website or its systems", "Do not submit unlawful, harmful, misleading, or infringing content", "Do not misuse the website or represent that you are affiliated with TCMS without permission"] },
    { title: "Intellectual property", paragraphs: ["Unless otherwise stated, the website’s written content, visual design, and brand materials are owned by or licensed to TCMS Limited. They may not be reproduced for commercial use without written permission. Third-party names and marks remain the property of their respective owners."] },
    { title: "Availability and accuracy", paragraphs: ["TCMS aims to keep website information useful and current but does not guarantee uninterrupted access or that every item is complete and error-free. We may change, suspend, or remove website content when reasonably required."] },
    { title: "External services", paragraphs: ["Links or device features such as email and telephone applications are provided for convenience. TCMS is not responsible for the availability, security, or policies of third-party services."] },
    { title: "Contact", paragraphs: ["Questions about these terms may be sent to info@tcmslimited.com or directed to the TCMS head office in Mende, Maryland, Lagos, Nigeria."] },
  ]} />;
}
