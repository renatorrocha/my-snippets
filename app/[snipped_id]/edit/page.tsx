import { getSnippetById } from "@/actions";
import SnippedEditForm from "@/components/snippet-edit-form";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function SnippetEditPage(props: {
  params: { snipped_id: string };
}) {
  const snippet = await getSnippetById(props.params.snipped_id);

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="truncate text-3xl">
          Editing snippets{" "}
          <span className="font-bold text-primary">{snippet.title}</span>
        </p>
      </div>
      <SnippedEditForm {...snippet} />
    </div>
  );
}
