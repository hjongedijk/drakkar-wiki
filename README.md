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

## What to do on GitHub

1. Create the target GitHub repository.
2. Enable Pages in `Settings -> Pages`.
3. Set source to `Deploy from a branch`.
4. Use branch `gh-pages`, folder `/ (root)`.
5. Run the publish script from this project root.

## Publish

From project root:

```bash
./publish-wiki.sh
```

This single script now does both:

- pushes editable wiki source from `project/wiki` to `hjongedijk/drakkar-wiki` branch `main`
- builds the static site
- publishes the built site to branch `gh-pages`
- writes the custom domain `wiki.drakkar.botcontrol.nl`

Current baked-in defaults:

- target repo: `hjongedijk/drakkar-wiki`
- source branch: `main`
- pages branch: `gh-pages`
- custom domain: `wiki.drakkar.botcontrol.nl`
- edit repo links: `hjongedijk/drakkar`

You can still override them with env vars if ever needed:

- `WIKI_TARGET_REPO`
- `WIKI_SOURCE_BRANCH`
- `WIKI_PAGES_BRANCH`
- `WIKI_EDIT_REPO`
- `WIKI_EDIT_BRANCH`
- `WIKI_CUSTOM_DOMAIN`
