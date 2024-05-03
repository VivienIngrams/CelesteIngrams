import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import video from './schemaTypes/video'
import homepagePhoto from './schemaTypes/homepagePhoto'
import practice from './schemaTypes/practice'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, video, category, blockContent, homepagePhoto, practice],
}
