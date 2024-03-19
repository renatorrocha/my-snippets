"use client";

import { SnippetType } from "@/schema/Snippet.validator";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function SnippedEditForm(snippet: SnippetType) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
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
    </div>
  );
}
