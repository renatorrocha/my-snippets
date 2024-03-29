import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="container sticky top-0 z-10 mb-8 flex justify-center border-b bg-white py-4">
      <div className="flex flex-1 items-center justify-between">
        <Link href="/" className="animate-3s-all hover:scale-110">
          <p className="text-lg">
            my
            <span className="gradient-indigo-violet font-bold">.Snippets</span>
          </p>
        </Link>

        <section className="flex gap-4">
          <Link
            href="https://github.com/renatorrocha"
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            <p className="hidden font-semibold md:block">Github</p>

            <Github className="block fill-white text-black md:hidden " />
          </Link>

          <Link
            href="https://www.linkedin.com/in/renato-rrodrigues/"
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            <p className="hidden font-semibold md:block">
              Linked{" "}
              <span className="rounded bg-blue-500 px-1 py-0.5 text-white">
                in
              </span>
            </p>

            <Linkedin className="block fill-blue-500 text-blue-500 md:hidden " />
          </Link>
        </section>
      </div>
    </nav>
  );
}
