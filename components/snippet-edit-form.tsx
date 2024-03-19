"use client";

import { SnippetType } from "@/schema/Snippet.validator";
import { Editor } from "@monaco-editor/react";
import Link from "next/link";
import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import * as actions from "@/actions";

export default function SnippedEditForm(snippet: SnippetType) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, code);

  return (
    <div className="container">
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />
      <form
        action={editSnippetAction}
        className="flex justify-center gap-4 pt-4 md:justify-end"
      >
        <Link
          href={`/${snippet.id}`}
          className={buttonVariants({ variant: "destructive" })}
        >
          Cancel
        </Link>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
