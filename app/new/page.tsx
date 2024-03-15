"use client";

import { createSnippet } from "@/actions";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SnippetSchema, SnippetType } from "@/schema/Snippet.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function NewSnippetPage() {
  const SnippetForm = useForm<SnippetType>({
    resolver: zodResolver(SnippetSchema),
  });

  function onSubmit(data: SnippetType) {
    createSnippet(data);
    toast.success("Snippet created successfully");
  }

  return (
    <form
      {...SnippetForm}
      onSubmit={SnippetForm.handleSubmit(onSubmit)}
      className="flex flex-col flex-1 gap-4 items-end"
    >
      <Input placeholder="Title" {...SnippetForm.register("title")} />

      <Textarea
        placeholder="Type your code here."
        className="resize-none"
        {...SnippetForm.register("code")}
      />

      <div className="flex gap-4">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back
        </Link>

        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
