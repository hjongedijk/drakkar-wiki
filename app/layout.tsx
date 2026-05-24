import "@/app/global.css";

import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";

import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Drakkar Docs",
    template: "%s | Drakkar Docs"
  },
  description: "Drakkar documentation, setup guides, API usage, storage layout, and upgrade instructions."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            nav={{ title: <span className="font-bold tracking-tight">Drakkar</span> }}
            links={[
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
