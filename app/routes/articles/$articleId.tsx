import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import parse from "html-react-parser";
import { format } from "date-fns";

import { client } from "~/libs/server/apiClient.server";
import { CategoryBadge } from "~/components/CategoryBadge";
import type { Article } from "~/types/cms";

export const loader: LoaderFunction = async ({ params }) => {
  const content = await client
    .get<Article>({
      endpoint: "blogs",
      contentId: params.articleId,
    })
    .catch(() => {
      throw new Response("Content Not Found.", {
        status: 404,
      });
    });

  return json(content);
};
export default function ArticleId() {
  const { title, content, category, eyecatch, publishedAt } =
    useLoaderData<Article>();

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="rounded-lg bg-purple-100 p-1 mb-1">
          <img
            className="h-40 lg:h-60 rounded-lg"
            src={eyecatch.url}
            alt="eyecatch"
          />
        </div>
        <h1 className="text-center text-2xl font-bold">{title}</h1>

        <div className="flex items-center gap-2">
          <CategoryBadge category={category.name} />

          <span className="text-xs text-gray-700">
            {format(new Date(publishedAt), "yyyy年MM月dd日")}
          </span>
        </div>
      </div>

      <div className="prose prose-slate prose-sm lg:prose-base border-t pt-4">
        <div className="w-full overflow-hidden">{parse(content)}</div>
      </div>
    </div>
  );
}
