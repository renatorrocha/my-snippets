import { z } from "zod";

export const SnippetSchema = z.object({
  title: z
    .string()
    .min(3, "Snippet title needs to be at least 3 characters.")
    .describe("Snippet title"),

  code: z
    .string()
    .min(10, "Snippet code needs to be at least 10 characters.")
    .describe("Snippet code"),
});

export type SnippetType = z.infer<typeof SnippetSchema>;
