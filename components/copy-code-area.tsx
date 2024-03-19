"use client";

import { toast } from "sonner";

interface CopyCodeAreaProps {
  code: string;
}

export default function CopyCodeArea({ code }: CopyCodeAreaProps) {
  function copyCode(code: string) {
    navigator.clipboard.writeText(code);
    toast.success("Code Copied to Clipboard !");
  }

  return (
    <div>
      <pre
        onClick={() => copyCode(code)}
        className="rounded border bg-gray-100 p-4 transition-all duration-300 hover:cursor-pointer hover:bg-primary-foreground"
      >
        <code>{code}</code>
      </pre>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Click the code snippet to copy it to your clipboard.
      </p>
    </div>
  );
}
