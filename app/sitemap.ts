import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://baengnyeong-project.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const placeSlugs = [
    "baengnyeong-bi",
    "bunbawi",
    "cheonan",
    "christian-island",
    "christianity",
    "dapdong-beach",
    "dokbawi",
    "dragon",
    "dumujin",
    "geomeunnang-coast",
    "hani",
    "jiduri-beach",
    "kkeutseom",
    "kongdol",
    "maebawi-observatory",
    "miadong-beach",
    "moraeul-beach",
    "nohwa-port",
    "nongyeo-beach",
    "okjuk-sanddune",
    "photozone",
    "sagot",
    "sajabawi",
    "samgaksan",
    "seopungbaji",
    "simcheonggak",
    "socheong-catholic",
    "socheong-columnar-joint",
    "socheong-lighthouse",
    "stromatolite",
    "sunset-observatory",
    "tapdong-port",
    "tree-ring-rock",
    "yedong-port",
  ];

  const placePages: MetadataRoute.Sitemap = placeSlugs.map((slug) => ({
    url: `${baseUrl}/place/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...placePages];
}
