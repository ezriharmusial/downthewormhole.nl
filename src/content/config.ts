import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		image: z.string().optional(),
	}),
});

const pages = defineCollection({
    schema: z.object({
        index: z.number(),
        title: z.string(),
        date: z.date(),
        updatedDate: z.date(),
        subtitle: z.string(),
        shorttitle: z.string().optional(),
        icon: z.string().optional(),
        image: z.string().optional(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        color: z.string().optional(),
    })
});

export const collections = {pages, blog };
