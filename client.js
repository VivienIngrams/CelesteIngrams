import { createClient } from 'next-sanity'


const projectId = process.env.SANITY_PROJECT_ID 
const dataset = process.env.SANITY_DATASET 
const apiVersion = process.env.SANITY_API_VERSION || '2023-05-03' 

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, 
})