# Drakkar Wiki

Standalone Fumadocs site for publishing Drakkar docs to GitHub Pages.

## Local development

```bash
cd wiki
npm install
npm run dev -- --hostname 0.0.0.0 --port 4100
```

Open:

- `http://HOST:4100/`
- `http://HOST:4100/installation/`

## Edit docs

Main content lives in:

- `wiki/content/docs/index.mdx`
- `wiki/content/docs/installation.mdx`
- `wiki/content/docs/configuration.mdx`
- `wiki/content/docs/api.mdx`
- `wiki/content/docs/upgrading.mdx`
- `wiki/content/docs/troubleshooting.mdx`

Sidebar order lives in:

- `wiki/content/docs/meta.json`

## GitHub Pages URL rules

Exact URL `https://drakkar.github.io/` is only possible if:

1. the GitHub user or org name is `drakkar`
2. the Pages repository is `drakkar.github.io`

Then the published static site root is `https://drakkar.github.io/`.

If your GitHub owner is different, for example `hjongedijk`, then GitHub Pages URLs are normally:

- user/org site root: `https://hjongedijk.github.io/`
- project site: `https://hjongedijk.github.io/<repo>/`

For project pages, publish with a site base path:

```bash
./publish-wiki.sh hjongedijk/drakkar-wiki /drakkar-wiki hjongedijk/drakkar
```

That gives URLs like:

- `https://hjongedijk.github.io/drakkar-wiki/`

## What to do on GitHub

1. Create the target GitHub repository.
2. Enable Pages in `Settings -> Pages`.
3. Set source to `Deploy from a branch`.
4. Use branch `gh-pages`, folder `/ (root)`.
5. Run the publish script from this project root.

## Publish source to repo main

From project root:

```bash
./publish-wiki-source.sh <owner/repo> [branch]
```

Example:

```bash
./publish-wiki-source.sh hjongedijk/drakkar-wiki main
```

This pushes the editable wiki source files from `project/wiki` into the target repository branch, typically `main`.

## Publish built site to Pages

From project root:

```bash
./publish-wiki.sh <pages-owner>/<pages-repo> [site-base] [edit-owner/edit-repo] [edit-branch]
```

Examples:

User/org pages root:

```bash
./publish-wiki.sh drakkar/drakkar.github.io "" drakkar/drakkar main
```

Project pages:

```bash
./publish-wiki.sh hjongedijk/drakkar-wiki /drakkar-wiki hjongedijk/drakkar main
```

Custom domain:

```bash
WIKI_CUSTOM_DOMAIN=wiki.drakkar.botcontrol.nl ./publish-wiki.sh hjongedijk/drakkar-wiki "" hjongedijk/drakkar main
```

With a custom domain, the wiki must be built at the domain root. Do not publish it with `/drakkar-wiki` as the site base if GitHub Pages is serving `https://wiki.drakkar.botcontrol.nl/`.
