// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
	images: {
		// Sanity images are resized by Sanity's CDN (see app/components/SanityImage.tsx),
		// so no remote hosts are allowed through the Next.js optimizer. Only local
		// images in /public get transformed, with a small set of widths and one
		// format, cached for 31 days.
		remotePatterns: [],
		deviceSizes: [640, 1080, 1920],
		imageSizes: [128, 256],
		formats: ['image/webp'],
		minimumCacheTTL: 2678400,
	}
};
