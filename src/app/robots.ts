// src/app/robots.ts
import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ obligatoire avec output: "export"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://killianfievet.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}