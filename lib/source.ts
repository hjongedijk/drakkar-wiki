import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";

const docsSource = docs.toFumadocsSource();
const docsFiles = Array.isArray(docsSource.files)
  ? docsSource.files
  : (docsSource.files as () => typeof docsSource.files extends Array<infer T> ? T[] : unknown[])();

export const source = loader({
  baseUrl: "/",
  source: {
    files: docsFiles
  },
  plugins: [lucideIconsPlugin()]
});
