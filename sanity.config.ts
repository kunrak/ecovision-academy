import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { course } from "./src/sanity/schema/course";

/* 
  Main Sanity Configuration
  This file connects the Sanity Studio (dashboard) to our project schema.
*/

export default defineConfig({
  name: "ecovision-academy",
  title: "Ecovision Academy Studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string || "production",

  basePath: "/studio", // Users can access the dashboard at /studio

  plugins: [structureTool()],

  schema: {
    types: [course],
  },
});
