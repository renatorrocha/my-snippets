import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-1 py-8 justify-between items-center">
      <Link href="/" className="hover:scale-110 duration-300 transition-all">
        <p className="text-lg">
          my<span className="font-bold gradient-indigo-violet">.Snippets</span>
        </p>
      </Link>

      <Link
        href="https://www.linkedin.com/in/renato-rrodrigues/"
        target="_blank"
        className={buttonVariants({ size: "icon" })}
      >
        <Linkedin />
      </Link>
    </nav>
  );
}
