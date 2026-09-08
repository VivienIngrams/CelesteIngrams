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
      validation: (Rule) => Rule.required().error("ID is required"),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),

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
      name: "text3",
      title: "Bottom Text",
      type: "text",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "string", title: "URL (can be external or internal)" , validation: (Rule) => Rule.required().error("URL link is required" ) },
            { name: "title", type: "string", title: "Title" },
            { name: "text", type: "text", title: "Description" },
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
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
            { name: "url", type: "string", title: "URL (can be external or internal)", validation: (Rule) => Rule.required().error("Video URL is required"), },
            { name: "alt", type: "string", title: "Alternative Text" },
          ],
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
      title: "Display on Collaborations Page",
      type: "boolean",
            description: "Toggle to show/hide this project on the Collaborations page",
      initialValue: false,
    }),
    defineField({
      name: "displayOnProjectsPage",
      title: "Display on Projects Page",
      type: "boolean",
      description: "Toggle to show/hide this project on the main Projects page",
      initialValue: true,
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
