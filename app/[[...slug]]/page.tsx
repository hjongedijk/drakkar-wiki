import { source } from "@/lib/source";
import type { TOCItemType } from "fumadocs-core/toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

const editOwner = process.env.WIKI_EDIT_REPO_OWNER;
const editRepo = process.env.WIKI_EDIT_REPO_NAME;
const editBranch = process.env.WIKI_EDIT_REPO_BRANCH || "main";
const EDIT_REPO = editOwner && editRepo
  ? { owner: editOwner, repo: editRepo, sha: editBranch }
  : null;

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const data = page.data as typeof page.data & {
    body: React.ComponentType<{ components?: Record<string, unknown> }>;
    toc?: TOCItemType[];
    full?: boolean;
    lastModified?: Date | string | number;
    title: string;
    description?: string;
  };

  const MDX = data.body;

  return (
    <DocsPage
      toc={data.toc}
      full={data.full}
      lastUpdate={data.lastModified}
      editOnGithub={EDIT_REPO ? {
        ...EDIT_REPO,
        path: `wiki/content/docs/${page.path}`
      } : undefined}
    >
      <DocsTitle>{data.title}</DocsTitle>
      <DocsDescription>{data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const data = page.data as typeof page.data & { title: string; description?: string };

  return {
    title: data.title,
    description: data.description
  };
}
