import * as actions from "@/actions";
import { Button, buttonVariants } from "@/components/ui/button";
import prisma from "@/prisma/prisma-client";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default async function SnippedShowPage(props: {
  params: { snipped_id: string };
}) {
  const snippet = await prisma.snippets.findFirst({
    where: { id: props.params.snipped_id },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="w-96 truncate text-3xl font-bold text-primary">
          {snippet.title}
        </p>

        <div className="flex gap-4">
          <Link
            href={`/${snippet.id}/edit`}
            className={buttonVariants({ variant: "outline" })}
          >
            Edit
          </Link>

          <form action={deleteSnippetAction}>
            <Button variant="destructive">Delete</Button>
          </form>
        </div>
      </div>

      <pre className="rounded border bg-primary-foreground p-4">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}