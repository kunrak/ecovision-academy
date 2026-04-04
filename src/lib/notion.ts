import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export interface NotionCourse {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  image: string | null;
  brochureUrl: string | null;
}

export async function getCourses(): Promise<NotionCourse[]> {
  if (!DATABASE_ID || !process.env.NOTION_TOKEN) {
    console.warn("NOTION_TOKEN or NOTION_DATABASE_ID is missing");
    return [];
  }

  try {
    let effectiveDataSourceId = DATABASE_ID;

    // The new Notion API (v2025-09-03) distinguishes between Databases and Data Sources.
    // dataSources.query requires a data_source_id. If DATABASE_ID is a database container,
    // we need to find its primary data source ID.
    try {
      const db = await notion.databases.retrieve({ database_id: DATABASE_ID });
      const dataSources = (db as any).data_sources;
      if (dataSources && dataSources.length > 0) {
        effectiveDataSourceId = dataSources[0].id;
      }
    } catch (e) {
      // If retrieve fails, assume DATABASE_ID is already a data_source_id
    }

    const response = await (notion as any).dataSources.query({
      data_source_id: effectiveDataSourceId,
      // Temporarily removing filter to ensure courses with unassigned status are fetched
    });

    if (response.results.length === 0) {
      console.warn("No courses found in the Notion data source.");
    }

    return response.results.map((page: any) => {
      const props = page.properties;

      // Extract values safely
      const title = props.Name?.title?.[0]?.plain_text || "Untitled Course";
      const category = props.Category?.select?.name || "Uncategorized";
      const description = props.Description?.rich_text?.[0]?.plain_text || "";
      const duration = props.Duration?.rich_text?.[0]?.plain_text || "Flexible";
      const level = props.Level?.select?.name || "Beginner";
      const id = props.ID?.rich_text?.[0]?.plain_text || page.id;

      // Handle Image (Files & Media)
      const imageFile = props.Image?.files?.[0];
      const image = imageFile?.file?.url || imageFile?.external?.url || null;

      // Handle Brochure (Files & Media)
      const brochureFile = props.Brochure?.files?.[0];
      const brochureUrl = brochureFile?.file?.url || brochureFile?.external?.url || null;

      return {
        id,
        title,
        category,
        description,
        duration,
        level,
        image,
        brochureUrl,
      };
    });
  } catch (error) {
    console.error("Error fetching courses from Notion:", error);
    return [];
  }
}
