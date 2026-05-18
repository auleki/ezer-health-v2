import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        "*",
        "Googlebot",
        "Bingbot",
        "GPTBot",
        "ChatGPT-User",
        "PerplexityBot",
        "Claude-Web",
        "anthropic-ai",
        "Applebot",
        "Google-Extended"
      ],
      allow: "/",
      disallow: ["/api/", "/_next/", "/to-deploy/", "/build/"],
    },
    sitemap: "https://ezerhealthcare.com/sitemap.xml",
  };
}
