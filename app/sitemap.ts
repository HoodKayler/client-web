import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tcmslimited.com";
  return ["", "/services", "/projects", "/about-us", "/contact", "/privacy-policy", "/terms-and-conditions", "/accessibility-statement"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : path.startsWith("/privacy") || path.startsWith("/terms") || path.startsWith("/accessibility") ? 0.3 : 0.8 }));
}
