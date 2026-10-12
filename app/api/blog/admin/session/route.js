import { createSupabaseServerClient } from "../../../../../src/lib/supabase/server";
import { apiError } from "../../../../../src/lib/supabase/blog-admin";

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      throw new Error(`Unable to verify the current Supabase user: ${userError.message}`);
    }

    if (!user) {
      return Response.json({ authenticated: false, authorized: false }, { status: 401 });
    }

    const { data: authorized, error: adminError } = await supabase.rpc("is_blog_admin");

    if (adminError) {
      throw new Error(`Unable to verify blog administrator access: ${adminError.message}`);
    }

    return Response.json({
      authenticated: true,
      authorized: Boolean(authorized),
      email: user.email,
    });
  } catch (error) {
    return apiError(error);
  }
}
