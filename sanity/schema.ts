import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
// import category from './schemaTypes/category'
// import post from './schemaTypes/post'
import video from './schemaTypes/video'
import homepagePhoto from './schemaTypes/homepagePhoto'
import practice from './schemaTypes/practice'
import project from './schemaTypes/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ video,  blockContent, homepagePhoto, practice, project],
}
