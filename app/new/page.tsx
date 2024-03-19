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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SnippetType>({
    resolver: zodResolver(SnippetSchema),
  });

  function onSubmit(data: SnippetType) {
    createSnippet(data);
    toast.success("Snippet created successfully");
  }

  return (
    <section className="flex flex-1 flex-col gap-4">
      <h1 className="text-3xl font-bold text-primary">Create Snippet</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col items-end gap-4"
      >
        <div className="grid w-full gap-2">
          <Input placeholder="Title" {...register("title")} />
          {errors.title && (
            <span className="ml-4 text-sm text-red-500 ">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Type your code here."
            className="resize-none"
            {...register("code")}
          />
          {errors.code && (
            <span className="ml-4 text-sm text-red-500 ">
              {errors.code.message}
            </span>
          )}
        </div>

        <div className="flex gap-4">
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Back
          </Link>

          <Button type="submit">Create</Button>
        </div>
      </form>
    </section>
  );
}
