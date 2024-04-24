import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepagePhoto',
  title: 'Homepage Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'homepagePhoto',
      title: 'Homepage Carousel Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
     ],
})