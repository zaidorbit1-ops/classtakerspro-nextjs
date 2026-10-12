"use client";

import { getSupabaseBrowserClient } from "./supabase/browser";

export const BLOG_MEDIA_BUCKET = "ctp-blog-media";

const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
]);

export async function uploadBlogImage(file, folder = "content") {
  if (!file || !allowedTypes.has(file.type)) {
    throw new Error("Choose a JPEG, PNG, WebP or GIF image.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Images must be 5 MB or smaller.");
  }

  const extension = allowedTypes.get(file.type);
  const path = `${folder}/${crypto.randomUUID()}.${extension}`;
  const supabase = getSupabaseBrowserClient();
  const { error } = await supabase.storage
    .from(BLOG_MEDIA_BUCKET)
    .upload(path, file, { cacheControl: "31536000", contentType: file.type, upsert: false });
  if (error) {
    if (error.message.includes("Bucket not found")) {
      throw new Error(`Supabase Storage bucket "${BLOG_MEDIA_BUCKET}" was not found.`);
    }
    throw new Error(`Image upload failed: ${error.message}`);
  }

  const { data } = supabase.storage.from(BLOG_MEDIA_BUCKET).getPublicUrl(path);
  if (!data?.publicUrl) throw new Error("Supabase did not return a public image URL.");
  return data.publicUrl;
}
