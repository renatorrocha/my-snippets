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
    <div className="container">
      <pre
        onClick={() => copyCode(code)}
        className="animate-3s-all group rounded border bg-gray-50 p-4 shadow-md hover:cursor-pointer hover:bg-gray-100"
      >
        <code className="animate-3s-all group-hover:font-semibold">{code}</code>
      </pre>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Click the code snippet to copy it to your clipboard.
      </p>
    </div>
  );
}
