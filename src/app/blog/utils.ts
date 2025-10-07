// src/app/blog/utils.ts
import { supabase } from "@/lib/supabase";

export type BlogPost = {
  id: string | number;
  title: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  image_url?: string | null;
  cover_image_url?: string | null;
  author?: string | null;
  category?: string | null;
  published_at?: string | null;
  read_time_min?: number | null;
};

function normalizePost(row: Record<string, unknown>): BlogPost {
  const r = row as Partial<BlogPost>;
  return {
    id: (r.id as string | number) ?? String(Math.random()),
    title: r.title ?? "Untitled",
    slug: r.slug ?? undefined,
    excerpt: r.excerpt ?? undefined,
    content: r.content ?? undefined,
    image_url: (r.image_url as string) ?? (r.cover_image_url as string) ?? null,
    cover_image_url: (r.cover_image_url as string) ?? null,
    author: (r.author as string) ?? null,
    category: (r.category as string) ?? null,
    published_at: (r.published_at as string) ?? null,
    read_time_min: (r.read_time_min as number) ?? null,
  };
}

export async function getFeaturedBlogPost(): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("featured", true)
      .order("published_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return normalizePost(data as Record<string, unknown>);
  } catch {
    return {
      id: "fallback-featured",
      title:
        "Algarve Property Update: Why Buyer Demand Remains Strong in 2025",
      slug: "algarve-property-update-2025",
      excerpt:
        "Prices remain resilient with premium coastal areas leading activity. Here is what to know before you buy.",
      image_url: "/hero-algarve.jpg",
      author: "Editorial Team",
      category: "Market Intelligence",
      published_at: new Date().toISOString(),
      read_time_min: 8,
    };
  }
}

export async function getAllBlogPosts(limit = 12): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit);
    if (error) throw error;
    return (data as Record<string, unknown>[]).map(normalizePost);
  } catch {
    // Minimal, on-brand examples to ensure the page renders nicely without data
    return [
      {
        id: "sample-1",
        title: "How to Choose the Right Algarve Neighborhood",
        slug: "choose-right-algarve-neighborhood",
        excerpt:
          "Understand lifestyle, commute, amenities, and investment factors when narrowing your Algarve search.",
        image_url: "/images/journey/algarve-coast-1.jpg",
        author: "Guest Advisor",
        category: "Guides",
        published_at: new Date().toISOString(),
        read_time_min: 6,
      },
      {
        id: "sample-2",
        title: "Buying in Portugal: Fees, Taxes, and Timelines",
        slug: "buying-in-portugal-fees-taxes",
        excerpt:
          "A straightforward breakdown of costs and the typical steps from offer to keys.",
        image_url: "/images/journey/algarve-coast-2.jpg",
        author: "Editorial Team",
        category: "How-To",
        published_at: new Date().toISOString(),
        read_time_min: 7,
      },
    ];
  }
}

