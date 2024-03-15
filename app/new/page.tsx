import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function NewSnippetPage() {
  return (
    <form action="" className="flex flex-col flex-1 gap-4 items-end">
      <Input placeholder="Name" />

      <Textarea placeholder="Type your code here." className="resize-none" />

      <div className="flex gap-4">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Back
        </Link>

        <Button type="submit">Create</Button>
      </div>
    </form>
  );
}
