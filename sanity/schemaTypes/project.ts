import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "dates",
      title: "Dates",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
    }),
    defineField({
      name: "text2",
      title: "Additional Text",
      type: "text",
    }),
    defineField({
      name: "link",
      title: "A Link?",
      type: "object",
      fields: [
        { name: "url", type: "string", title: "URL" },
        { name: "text", type: "string", title: "Text" },
      ],
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "string", title: "URL" },
            { name: "alt", type: "string", title: "Alternative Text" },
          ],
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: "collaboration",
      title: "Collaboration",
      type: "boolean",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "images.0",
    },
  },
});
