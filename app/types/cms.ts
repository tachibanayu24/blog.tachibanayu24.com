import type { MicroCMSImage } from "microcms-js-sdk";

export type Category = "diary" | "tech" | "finance" | "other";

export type Article = {
  id: string;
  title: string;
  content: string;
  category: { name: Category };
  eyecatch: MicroCMSImage;
  publishedAt: string;
};
