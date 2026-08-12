import type { Metadata } from "next";
import { PolicyPage } from "@/components/sections/policy-page";

export const metadata: Metadata = { title: "Accessibility Statement", description: "TCMS Limited’s commitment to an inclusive, accessible website experience." };

export default function AccessibilityPage() {
  return <PolicyPage eyebrow="Inclusive access" title="Accessibility statement" updated="12 August 2026" intro="TCMS Limited wants this website to be usable by as many people as possible, including visitors who use assistive technologies or navigate without a mouse." sections={[
    { title: "Our approach", paragraphs: ["The website has been built with semantic structure, keyboard-accessible navigation, visible focus states, descriptive image text, labelled form fields, responsive layouts, and colour contrast in mind. Motion is reduced when a visitor’s device requests reduced motion."] },
    { title: "What you should be able to do", items: ["Navigate the main website using a keyboard", "Zoom or resize text without losing core content", "Understand headings, links, buttons, and form labels with a screen reader", "Use the website across desktop, tablet, and mobile screen sizes"] },
    { title: "Ongoing work", paragraphs: ["Accessibility is an ongoing responsibility. As content and functionality change, TCMS intends to continue reviewing the experience and correcting barriers that are identified."] },
    { title: "Report a problem", paragraphs: ["If you have difficulty using any part of this website, email info@tcmslimited.com or call +234 805 328 2000. Please tell us which page or feature caused the issue and, where helpful, the browser or assistive technology you were using."] },
    { title: "Physical office", paragraphs: ["Accessibility arrangements at the TCMS head office should be confirmed directly before visiting so the team can understand and support any specific access needs."] },
  ]} />;
}
