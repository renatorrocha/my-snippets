"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SnippetSchema, SnippetType } from "@/schema/Snippet.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function NewSnippetPage() {
  const SnippetForm = useForm<SnippetType>({
    resolver: zodResolver(SnippetSchema),
  });

  function onSubmit(data: SnippetType) {
    console.log(data);
  }

  return (
    <form
      {...SnippetForm}
      onSubmit={SnippetForm.handleSubmit(onSubmit)}
      className="flex flex-col flex-1 gap-4 items-end"
    >
      <Input placeholder="Name" {...SnippetForm.register("name")} />

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
