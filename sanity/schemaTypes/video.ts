import { defineField, defineType } from "sanity";

export default defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
    defineField({
      name: "date",
      title: "Date of video creation",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});