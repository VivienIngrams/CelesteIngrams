import {sanityClient} from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-05-21', // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;