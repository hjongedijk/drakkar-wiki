import "@/app/global.css";

import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Space_Grotesk } from "next/font/google";

import type { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Drakkar Docs",
    template: "%s | Drakkar Docs"
  },
  description: "Drakkar documentation, setup guides, API usage, storage layout, and upgrade instructions."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            nav={{ title: <span className="font-bold tracking-tight">Drakkar</span> }}
            links={[
              { text: "Wiki", url: "/" },
              { text: "Frontend Repo", url: "https://github.com/hjongedijk/drakkar-frontend" },
              { text: "Backend Repo", url: "https://github.com/hjongedijk/drakkar-backend" }
            ]}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
