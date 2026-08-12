import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/policy-page";

export const metadata: Metadata = { title: "Privacy Policy", description: "How TCMS Limited handles information when you use this website or contact the company." };

export default function PrivacyPage() {
  return <PolicyPage eyebrow="Website information" title="Privacy policy" updated="12 August 2026" intro="TCMS Limited respects your privacy. This notice explains what information may be handled when you visit this website or choose to contact us." sections={[
    { title: "Information you choose to provide", paragraphs: ["The contact form on this website prepares an email in your device’s email application. The website does not transmit or store the form contents on a TCMS server. Once you send that email, TCMS receives the information through its email service and may use it to respond to your enquiry."] },
    { title: "Technical information", paragraphs: ["The website host may process limited technical information such as IP address, browser type, device information, and request logs to deliver, secure, and monitor the service. If analytics or additional tracking tools are introduced, this notice should be updated before they are enabled."] },
    { title: "How information is used", items: ["To respond to enquiries and discuss potential work", "To operate, secure, and improve the website", "To meet applicable legal or regulatory obligations"] },
    { title: "Sharing and retention", paragraphs: ["TCMS does not sell personal information. Information may be handled by service providers that support email, hosting, security, or professional operations, subject to their terms and applicable safeguards. Enquiry records are kept only as long as reasonably needed for the business relationship, record-keeping, or legal obligations."] },
    { title: "Your choices", paragraphs: ["You may ask about personal information you have provided, request a correction, or ask that it be deleted where applicable. Contact info@tcmslimited.com to make a request."] },
    { title: "Updates", paragraphs: ["This policy may be updated as the website or TCMS’s practices change. The current version and revision date will remain available on this page."] },
  ]} />;
}
