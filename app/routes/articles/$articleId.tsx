import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import parse from "html-react-parser";
import { format } from "date-fns";

import { client } from "~/libs/server/apiClient.server";

export const loader: LoaderFunction = async ({ params }) => {
  const content = await client
    .get<any>({
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
  const { title, content, category, eyecatch, publishedAt, updatedAt } =
    useLoaderData<any>();

  console.log(category);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-md bg-green-200 p-1 mb-4">
          <img className="h-60 rounded-md" src={eyecatch.url} alt="eyecatch" />
        </div>
        <h1 className="text-center text-3xl font-bold">{title}</h1>
        <div className="flex gap-2 items-center font-thin text-sm">
          <span>Category {category.name}</span>
          <span>/</span>
          <span>
            Published at {format(new Date(publishedAt), "yyyy/MM/dd HH:mm")}
          </span>
        </div>
      </div>

      <div className="prose max-w-none lg:p-8 sm:p-0">
        <div>{parse(content)}</div>
      </div>
    </div>
  );
}
