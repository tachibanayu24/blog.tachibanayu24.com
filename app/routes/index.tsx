import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ArticleCard } from "~/components/ArticleCard";
import { client } from "~/libs/server/apiClient.server";

export const loader: LoaderFunction = async () => {
  // microcms-js-sdkを使って一覧を取得
  const { contents } = await client.getList<any>({
    endpoint: "blogs",
  });
  return contents;
};

export default function Index() {
  const articles = useLoaderData<any>();
  console.log(articles);

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
