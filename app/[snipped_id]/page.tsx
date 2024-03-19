import * as actions from "@/actions";
import CopyCodeArea from "@/components/copy-code-area";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function SnippedShowPage(props: {
  params: { snipped_id: string };
}) {
  const snippet = await actions.getSnippetById(props.params.snipped_id);

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className=" truncate text-3xl font-bold text-primary">
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

      <CopyCodeArea code={snippet.code} />

    </div>
  );
}
