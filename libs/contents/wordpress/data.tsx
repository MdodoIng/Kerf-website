import { API_URL, WORDPRESS_AUTH_REFRESH_TOKEN } from "./client";
import {
  aboutUsQuery,
  blogsQuery,
  contactUsQuery,
  departmentsQuery,
  doctorQuery,
  homeQuery,
  internationalPatientCarePageQuery,
  privacyAndPolicyQuery,
  termsAndConditionsQuery,
  treatmentQuery,
  treatmentsPageQuery,
  utilityQuery,
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

type Ids =
  | "home"
  | "about"
  | "contact-us"
  | "department"
  | "departments"
  | "blogs"
  | "blog"
  | "doctor"
  | "doctors"
  | "doctor-page"
  | "treatment"
  | "treatments"
  | "treatments-related"
  | "treatments-related doctors"
  | "footer"
  | "seo"
  | "header"
  | "bookAndAppointment"
  | "privacyAndPolicy"
  | "termsAndConditions"
  | "treatments page"
  | "international patient care page";
export async function getContentFromWordPress(id: Ids, slug?: string) {
  const query: Record<Ids, any> = {
    home: homeQuery,
    about: aboutUsQuery,
    "contact-us": contactUsQuery,
    department: departmentsQuery("single", slug),
    departments: departmentsQuery("all"),
    blogs: blogsQuery("all"),
    blog: blogsQuery("single", slug),
    doctor: doctorQuery("single", slug),
    doctors: doctorQuery("all"),
    "doctor-page": doctorQuery("page"),
    treatment: treatmentQuery("single", slug),
    "treatments-related": treatmentQuery("related", slug),
    treatments: treatmentQuery("all"),
    "treatments-related doctors": treatmentQuery("related doctors", slug),
    footer: utilityQuery("footer"),
    header: utilityQuery("header"),
    seo: utilityQuery("seo"),
    bookAndAppointment: utilityQuery("bookAndAppointment"),
    privacyAndPolicy: privacyAndPolicyQuery,
    termsAndConditions: termsAndConditionsQuery,
    "treatments page": treatmentsPageQuery,
    "international patient care page": internationalPatientCarePageQuery,
  };
  const data = await fetchAPI(query[id]);
  return data;
}
