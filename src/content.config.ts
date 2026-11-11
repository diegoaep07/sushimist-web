import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menu_data_collection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/menu_data" }),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      category: z.string(),
      image: z.optional(image()),
      recomended: z.boolean().default(false),
      available: z.boolean().default(true),
      price: z.number(),
    }),
});

export const collections = {
  MENU_DATA: menu_data_collection,
};
