import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepagePhoto",
  title: "Homepage Photo",
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
          name: "alt",
          type: "string",
          title: "Alternative Text",
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
