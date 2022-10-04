import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "たちばなゆうとのブログ",
  description:
    "たちばなゆうとのブログです。技術的な関心・日記・ファイナンスのことなどを書いていきます。",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "たちばなゆうとのブログ",
  "og:type": "website",
  "og:description":
    "たちばなゆうとのブログです。技術的な関心・日記・ファイナンスのことなどを書いていきます。",
  "og:image": "https://storage.googleapis.com/tachibanayu24/utils/me128.jpeg",
  "og:image:width": "128",
  "og:image:height": "128",
  "twitter:card": "summary",
  "twitter:title": "たちばなゆうとのブログ",
  "twitter:creator": "tachibanayu24",
  "twitter:description":
    "たちばなゆうとのブログです。技術的な関心・日記・ファイナンスのことなどを書いていきます。",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐰</text></svg>",
    },
  ];
}

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <div className="py-8 px-4 lg:px-12 bg-slate-50 min-h-[calc(100vh-56px-64px)]">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
