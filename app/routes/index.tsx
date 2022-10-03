import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ArticleCard } from "~/components/ArticleCard";
import { client } from "~/libs/server/apiClient.server";
import type { Article } from "~/types/cms";

export const loader: LoaderFunction = async () => {
  const { contents } = await client.getList<Article[]>({
    endpoint: "blogs",
  });
  return contents.filter((c) => c.publishedAt);
};

export default function Index() {
  const articles = useLoaderData<Article[]>();

  return (
    <div className="flex flex-wrap gap-12 justify-start">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          body={article.content.replace(/(<([^>]+)>)/gi, "")}
          eyecatch={article.eyecatch.url}
          category={article.category.name}
          publishedAt={new Date(article.publishedAt)}
          src={`articles/${article.id}`}
        />
      ))}
    </div>
  );
}
