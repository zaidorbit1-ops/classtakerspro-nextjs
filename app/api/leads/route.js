const MAX_BODY_BYTES = 16_384;
const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://classtakerspro.com",
  "https://www.classtakerspro.com",
]);
const allowedFormNames = new Set(["contact-form", "popup-form", "website_form"]);

function jsonResponse(body, status) {
  return Response.json(body, { status });
}

export function OPTIONS() {
  return new Response(null, { status: 204 });
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.has(origin)) {
    return jsonResponse({ success: false, message: "Origin not allowed." }, 403);
  }

  const crmEndpoint = process.env.CRM_ENDPOINT?.trim();
  const websiteId = process.env.CRM_WEBSITE_ID?.trim();
  const secret = process.env.CRM_SECRET?.trim();
  if (!crmEndpoint || !websiteId || !secret) {
    return jsonResponse(
      { success: false, message: "CRM integration is not configured on the server." },
      503
    );
  }

  try {
    if (new URL(crmEndpoint).protocol !== "https:") {
      return jsonResponse(
        { success: false, message: "CRM endpoint must use HTTPS." },
        500
      );
    }
  } catch {
    return jsonResponse({ success: false, message: "CRM endpoint is invalid." }, 500);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ success: false, message: "Request is too large." }, 413);
  }

  let data;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return jsonResponse({ success: false, message: "Request is too large." }, 413);
    }
    data = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ success: false, message: "Invalid JSON payload." }, 400);
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return jsonResponse({ success: false, message: "Invalid JSON payload." }, 400);
  }

  if (typeof data.website === "string" && data.website.trim() !== "") {
    return jsonResponse({ success: false, message: "Spam detected." }, 400);
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const formName = typeof data.form_name === "string" ? data.form_name.trim() : "website_form";
  const sourceUrl = typeof data.source_url === "string" ? data.source_url.trim() : "";

  if (!name || !email || !phone) {
    return jsonResponse(
      { success: false, message: "Name, email and phone are required." },
      400
    );
  }
  if (name.length < 2 || name.length > 100) {
    return jsonResponse({ success: false, message: "Name is invalid." }, 400);
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ success: false, message: "Email is invalid." }, 400);
  }
  if (!/^[+()\-\d\s]{7,20}$/.test(phone)) {
    return jsonResponse({ success: false, message: "Phone number is invalid." }, 400);
  }
  if (message.length > 2000) {
    return jsonResponse({ success: false, message: "Message is too long." }, 400);
  }
  if (!allowedFormNames.has(formName)) {
    return jsonResponse({ success: false, message: "Form name is invalid." }, 400);
  }
  if (sourceUrl && (!/^https?:\/\//i.test(sourceUrl) || sourceUrl.length > 2048)) {
    return jsonResponse({ success: false, message: "Source URL is invalid." }, 400);
  }

  let crmResponse;
  try {
    crmResponse = await fetch(crmEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-crm-integration-id": websiteId,
        "x-crm-integration-secret": secret,
        "User-Agent": "ClassTakersPro-Server/1.0",
      },
      body: JSON.stringify({ name, email, phone, message, source_url: sourceUrl, form_name: formName }),
      signal: AbortSignal.timeout(15_000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("CRM request failed:", error instanceof Error ? error.message : "Unknown error");
    return jsonResponse(
      { success: false, message: "Could not reach the CRM. Please try again later." },
      502
    );
  }

  if (!crmResponse.ok) {
    console.error(`CRM rejected lead with HTTP ${crmResponse.status}.`);
    return jsonResponse(
      { success: false, message: "CRM rejected the submission. Please try again later." },
      502
    );
  }

  return jsonResponse({ success: true, message: "Lead submitted successfully." }, 200);
}
