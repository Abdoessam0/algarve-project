export type BlogImageArgs = {
  slug?: string;
  category?: string;
  cover?: string | null; // public-relative like /images/xxx.jpg
};

/**
 * Manual overrides for specific slugs -> image file in /public/images
 * (الصور لازم تكون موجودة فعليًا في: public/images)
 */
const OVERRIDES: Record<string, string> = {
  // maps to: /public/images/gettyimages-1011810152-612x612.jpg
  "buying-in-portugal-fees-taxes-and-timelines":
    "/images/gettyimages-1011810152-612x612.jpg",

  // maps to: /public/images/gettyimages-1729569380-612x612.jpg
  "how-to-choose-the-right-algarve-neighborhood":
    "/images/gettyimages-1729569380-612x612.jpg",

  // maps to: /public/images/gettyimages-2150181783-612x612.jpg
  "algarve-property-update-why-buyer-demand-remains-strong-in-2025":
    "/images/gettyimages-2150181783-612x612.jpg",
};

function normalize(input?: string | null) {
  return (
    input
      ?.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") ?? undefined
  );
}

export function resolveBlogImage({ slug, category, cover }: BlogImageArgs) {
  // 1) explicit cover (from DB/JSON)
  if (cover) {
    return cover.startsWith("/") ? cover : `/images/${cover}`;
  }

  const normalizedSlug = normalize(slug);
  const normalizedCategory = normalize(category);

  // 2) manual override map
  if (normalizedSlug && OVERRIDES[normalizedSlug]) {
    return OVERRIDES[normalizedSlug];
  }

  // 3) try by slug, then by category, then default
  const bySlug = normalizedSlug
    ? [
      `/images/${normalizedSlug}.webp`,
      `/images/${normalizedSlug}.jpg`,
      `/images/${normalizedSlug}.jpeg`,
      `/images/${normalizedSlug}.png`,
    ]
    : [];
  const byCat = normalizedCategory
    ? [
      `/images/${normalizedCategory}.webp`,
      `/images/${normalizedCategory}.jpg`,
      `/images/${normalizedCategory}.png`,
    ]
    : [];

  return [...bySlug, ...byCat, "/images/default-blog.webp"][0];
}
