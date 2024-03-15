"use server";

import prisma from "@/prisma/prisma-client";
import { SnippetType } from "@/schema/Snippet.validator";
import { redirect } from "next/navigation";

export async function createSnippet(snippet: SnippetType) {
  try {
    await prisma.snippets.create({
      data: {
        title: snippet.title,
        code: snippet.code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return { message: "Something went wrong!" };
    }
  }
  redirect("/");
}
