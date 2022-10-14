import { Link } from "@remix-run/react";
import { format } from "date-fns";
import type { ComponentProps } from "react";
import { CategoryBadge } from "../CategoryBadge";

type Props = {
  title: string;
  body: string;
  src: string;
  category: ComponentProps<typeof CategoryBadge>["category"];
  publishedAt: Date;
  eyecatch?: string;
};

export const ArticleCard = ({
  title,
  body,
  src,
  category,
  publishedAt,
  eyecatch,
}: Props) => {
  return (
    <Link
      className="block w-[480px] pb-2 rounded-lg bg-slate-200 shadow-lg"
      to={src}
    >
      <div className="flex justify-center bg-slate-100 rounded-t-lg">
        <img
          src={eyecatch}
          className="h-[180px] rounded-t-lg object-cover w-full"
          alt={title}
        />
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="font-bold">{title}</p>

        <div className="flex justify-between items-center font-thin text-sm mb-3">
          <CategoryBadge category={category} />
          <p>{format(publishedAt, "yyyy/MM/dd HH:mm")}</p>
        </div>
        <p className="line-clamp-3 text-sm text-gray-700">{body}</p>
      </div>
    </Link>
  );
};
