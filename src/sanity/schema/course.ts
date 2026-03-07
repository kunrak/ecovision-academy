/* 
  Sanity Schema for Courses
  This defines the fields that a non-technical person will see in the dashboard.
*/

import { defineType, defineField } from "sanity";

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      placeholder: "e.g. Master Excel for Data Science",
    }),
    defineField({
      name: "id",
      title: "Slug / ID",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "This creates the URL link. Click 'Generate' after typing the title.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Data Science", value: "Data Science" },
          { title: "Analytics", value: "Analytics" },
          { title: "Research", value: "Research" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Course Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      placeholder: "e.g. 5 Weeks",
    }),
    defineField({
      name: "level",
      title: "Complexity Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "Beginner" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
          { title: "Research", value: "Research" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Course Image",
      type: "image",
      options: {
        hotspot: true, // Allow user to crop image in Sanity
      },
    }),
    defineField({
      name: "brochure",
      title: "Course Brochure (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
      description: "Upload the PDF brochure for this course.",
    }),
  ],
});
