'use client'

import Image, { type ImageLoader, type ImageProps } from "next/image";

// Resize Sanity images on Sanity's CDN instead of the Next.js image optimizer,
// so they don't count against the host's image transformation quota.
const sanityLoader: ImageLoader = ({ src, width, quality }) => {
  if (!src.startsWith("https://cdn.sanity.io/")) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality || 75));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  return url.toString();
};

const SanityImage = (props: Omit<ImageProps, "loader">) => (
  <Image {...props} loader={sanityLoader} />
);

export default SanityImage;
