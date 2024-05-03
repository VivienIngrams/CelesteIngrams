import { defineField, defineType } from "sanity";

export default defineType({
  name: "practice",
  title: "Practice Page",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "text",
          type: "string",
          title: "Text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
