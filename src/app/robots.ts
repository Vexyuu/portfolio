// src/app/robots.ts
import { MetadataRoute } from "next";
import { BASE_URL } from "@/utils/env";

export const dynamic = "force-static"; // ✅ obligatoire avec output: "export"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = BASE_URL;

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}