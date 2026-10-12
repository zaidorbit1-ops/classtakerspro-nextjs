import { createSupabaseServerClient } from "./server";

export async function requireBlogAdmin() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(`Unable to verify the current Supabase user: ${userError.message}`);
  }

  if (!user) {
    return { supabase, response: Response.json({ error: "Sign in required." }, { status: 401 }) };
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc("is_blog_admin");

  if (adminError) {
    throw new Error(`Unable to verify blog administrator access: ${adminError.message}`);
  }

  if (!isAdmin) {
    return { supabase, response: Response.json({ error: "This account is not authorized to manage the blog." }, { status: 403 }) };
  }

  return { supabase, user, response: null };
}

export function apiError(error, status = 500) {
  console.error("[blog API]", error);
  return Response.json(
    { error: status === 500 ? "The blog request could not be completed." : error.message },
    { status }
  );
}
