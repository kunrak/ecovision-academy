import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

/* 
  Configure Sanity Client
  This connects our website to the Sanity database.
  We use the ENV variables so we don't leak project details in the code.
*/

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  useCdn: true, // Use CDN for faster loading
});

// Helper for generating image URLs
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Course fetching logic
export async function getCourses() {
  const query = `*[_type == "course"] {
    "id": id.current,
    title,
    category,
    description,
    duration,
    level,
    "image": image.asset->url,
    "brochureUrl": brochure.asset->url,
    "hasBrochure": defined(brochure.asset)
  }`;

  return await sanityClient.fetch(query);
}

export async function getFeaturedCourses() {
  const query = `*[_type == "course"] | order(_createdAt desc)[0...3] {
    "id": id.current,
    title,
    category,
    description,
    duration,
    level,
    "image": image.asset->url,
    "brochureUrl": brochure.asset->url,
    "hasBrochure": defined(brochure.asset)
  }`;

  return await sanityClient.fetch(query);
}
