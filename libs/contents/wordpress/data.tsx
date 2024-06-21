import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./client";
import {
  aboutUsQuery,
  blogsQuery,
  contactUsQuery,
  departmentsQuery,
  homeQuery,
} from "./queries";

async function fetchAPI(query = "") {
  const headers = { "Content-Type": "application/json" };
  if (WORDPRESS_AUTH_REFRESH_TOKEN) {
    // @ts-ignore
    Headers["Authorization"] = `Bearer ${WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    cache: "no-store",
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

type Ids = "home" | "about" | "contact-us" | "department" | "blogs";
export async function getContentFromWordPress(id: Ids, slug?: string) {
  const query: Record<Ids, any> = {
    home: homeQuery,
    about: aboutUsQuery,
    "contact-us": contactUsQuery,
    department: departmentsQuery("single", slug),
    blogs: blogsQuery,
  };
  const data = await fetchAPI(query[id]);
  return data;
}