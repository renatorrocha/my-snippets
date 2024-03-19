"use server";

import prisma from "@/prisma/prisma-client";
import { SnippetType } from "@/schema/Snippet.validator";
import { revalidatePath } from "next/cache";
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

  revalidatePath("/");
  redirect("/");
}

export async function deleteSnippet(Snippet_Id: string) {
  await prisma.snippets.delete({
    where: {
      id: Snippet_Id,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function getSnippetById(Snippet_Id: string) {
  const snippet = await prisma.snippets.findFirst({
    where: {
      id: Snippet_Id,
    },
  });
  return snippet;
}
