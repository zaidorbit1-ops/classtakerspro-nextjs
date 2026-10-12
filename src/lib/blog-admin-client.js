"use client";

export async function requestBlogAdmin(resource, options = {}) {
  const response = await fetch(`/api/blog/admin/${resource}${options.query || ""}`, {
    method: options.method || "GET",
    headers: options.body ? { "Content-Type": "application/json" } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "The blog request could not be completed.");
  }
  return result;
}

export async function getBlogAdminSession() {
  const response = await fetch("/api/blog/admin/session", { cache: "no-store" });
  const result = await response.json();
  return { response, ...result };
}
