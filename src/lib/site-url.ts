import { headers } from "next/headers";

export async function getRequestSiteUrl() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");

  if (!host) {
    return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  }

  return `${protocol}://${host}`;
}
