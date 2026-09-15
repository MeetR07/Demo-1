import { defineCollection, z } from "astro:content";

// Shared shape for anything that's "a gallery of photos from one shoot" —
// weddings, editorial, and (with a video link added) films all reuse it.
const galleryFields = {
  title: z.string(),
  location: z.string(),
  date: z.date(),
  cover: z.string(), // path under /public/images/...
  gallery: z.array(z.string()).default([]),
  excerpt: z.string(),
  featured: z.boolean().default(false),
};

const weddings = defineCollection({
  type: "content",
  schema: z.object({
    ...galleryFields,
    couple: z.string(), // e.g. "Priya & Arjun"
  }),
});

const editorial = defineCollection({
  type: "content",
  schema: z.object({ ...galleryFields }),
});

const films = defineCollection({
  type: "content",
  schema: z.object({
    ...galleryFields,
    videoUrl: z.string().url(), // unlisted YouTube/Vimeo embed URL
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { weddings, editorial, films, blog };
