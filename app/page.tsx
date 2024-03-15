import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/new" className={buttonVariants({ variant: "outline" })}>
        New
      </Link>
    </>
  );
}
