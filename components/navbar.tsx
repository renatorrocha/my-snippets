import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="container sticky top-0 z-10 mb-8 flex justify-center border-b bg-white py-4">
      <div className="flex flex-1 items-center justify-between">
        <Link href="/" className="transition-all duration-300 hover:scale-110">
          <p className="text-lg">
            my
            <span className="gradient-indigo-violet font-bold">.Snippets</span>
          </p>
        </Link>

        <Link
          href="https://www.linkedin.com/in/renato-rrodrigues/"
          target="_blank"
          className={buttonVariants({ size: "icon", variant: "secondary" })}
        >
          <Linkedin />
        </Link>
      </div>
    </nav>
  );
}
