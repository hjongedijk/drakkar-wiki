import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();
const siteBase = (process.env.WIKI_SITE_BASE || "").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(siteBase ? { basePath: siteBase, assetPrefix: siteBase } : {})
};

export default withMDX(config);
