import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import prisma from "@/prisma/prisma-client";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippets.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/${snippet.id}`}
      className="animate-3s-all flex justify-between rounded border p-4 shadow-md hover:scale-105 hover:font-semibold"
    >
      <p>{snippet.title}</p>
      <p>View</p>
    </Link>
  ));

  return (
    <section className="flex flex-col items-end gap-4">
      <Link
        href="/new"
        className={cn(buttonVariants(), "animate-3s-all hover:scale-105")}
      >
        New Snippet
      </Link>

      <div className="flex w-full flex-1 flex-col gap-4 px-4">
        {renderedSnippets}
      </div>
    </section>
  );
}
