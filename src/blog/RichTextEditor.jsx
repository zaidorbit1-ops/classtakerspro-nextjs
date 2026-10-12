"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { uploadBlogImage } from "../lib/blog-media-client";
import styles from "./RichTextEditor.module.css";

const StyledText = TextStyle.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize || null,
        renderHTML: (attributes) => attributes.fontSize ? { style: `font-size: ${attributes.fontSize}` } : {},
      },
    };
  },
});

function ToolbarButton({ active, label, onClick, children, disabled = false }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={active || undefined}
      disabled={disabled}
      className={`${styles.toolButton} ${active ? styles.toolButtonActive : ""}`}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({ value, onChange, onError, resetKey }) {
  const imageInput = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const reportError = useCallback((error) => {
    const message = error instanceof Error ? error.message : "Unable to upload image.";
    setUploadError(message);
    onError?.(message);
  }, [onError]);

  const uploadFiles = useCallback(async (files) => {
    if (!files.length) return;
    setUploading(true);
    setUploadError("");
    try {
      for (const file of files) {
        const src = await uploadBlogImage(file, "content");
        editor?.chain().focus().setImage({ src, alt: file.name.replace(/\.[^.]+$/, "") }).run();
      }
    } catch (error) {
      reportError(error);
    } finally {
      setUploading(false);
    }
  }, [reportError]);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      Image.configure({ inline: false, allowBase64: false }),
      Link.configure({ openOnClick: false, autolink: true, protocols: ["http", "https", "mailto"] }),
      Underline,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      StyledText,
      Color,
      FontFamily,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Write your article here. Paste formatted content directly into this canvas…" }),
    ],
    content: value || "",
    onUpdate: ({ editor: activeEditor }) => onChange(activeEditor.getHTML()),
    editorProps: {
      attributes: {
        class: styles.prose,
        "aria-label": "Article content editor",
      },
      handlePaste: (_view, event) => {
        const imageFiles = Array.from(event.clipboardData?.items || [])
          .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
          .map((item) => item.getAsFile())
          .filter(Boolean);
        if (!imageFiles.length) return false;
        event.preventDefault();
        uploadFiles(imageFiles);
        return true;
      },
      handleDrop: (_view, event) => {
        const imageFiles = Array.from(event.dataTransfer?.files || []).filter((file) => file.type.startsWith("image/"));
        if (!imageFiles.length) return false;
        event.preventDefault();
        uploadFiles(imageFiles);
        return true;
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const html = value || "";
    if (editor.getHTML() !== html) editor.commands.setContent(html, { emitUpdate: false });
  }, [editor, resetKey, value]);

  if (!editor) {
    return <div className={styles.loading} role="status">Preparing the writing canvas…</div>;
  }

  const setLink = () => {
    const current = editor.getAttributes("link").href || "";
    const next = window.prompt("Enter a web address", current || "https://");
    if (next === null) return;
    if (!next.trim()) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const safeUrl = next.trim();
    if (!/^(https?:\/\/|mailto:)/i.test(safeUrl)) {
      setUploadError("Links must start with https://, http:// or mailto:.");
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: safeUrl, target: "_blank", rel: "noopener noreferrer" }).run();
  };

  return (
    <div className={styles.editor}>
      <div className={styles.toolbar} role="toolbar" aria-label="Article formatting">
        <ToolbarButton label="Paragraph" active={editor.isActive("paragraph")} onClick={() => editor.chain().focus().setParagraph().run()}>¶</ToolbarButton>
        <ToolbarButton label="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</ToolbarButton>
        <ToolbarButton label="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</ToolbarButton>
        <span className={styles.divider} />
        <ToolbarButton label="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><strong>B</strong></ToolbarButton>
        <ToolbarButton label="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><em>I</em></ToolbarButton>
        <ToolbarButton label="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></ToolbarButton>
        <span className={styles.divider} />
        <ToolbarButton label="Bulleted list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>• ≡</ToolbarButton>
        <ToolbarButton label="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. ≡</ToolbarButton>
        <ToolbarButton label="Block quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>❝</ToolbarButton>
        <ToolbarButton label="Add link" active={editor.isActive("link")} onClick={setLink}>↗</ToolbarButton>
        <ToolbarButton label="Insert image" disabled={uploading} onClick={() => imageInput.current?.click()}>{uploading ? "…" : "▧"}</ToolbarButton>
        <ToolbarButton label="Insert table" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>▦</ToolbarButton>
        <span className={styles.divider} />
        <ToolbarButton label="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>↶</ToolbarButton>
        <ToolbarButton label="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>↷</ToolbarButton>
        <input ref={imageInput} className={styles.hiddenInput} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(event) => { uploadFiles(Array.from(event.target.files || [])); event.target.value = ""; }} />
      </div>
      <EditorContent editor={editor} />
      <div className={styles.footer}>
        <span>{uploadError || "Paste formatted text from Word or Google Docs, or drag an image into the article."}</span>
        <span>{uploading ? "Uploading image…" : "Changes save with the article"}</span>
      </div>
    </div>
  );
}
