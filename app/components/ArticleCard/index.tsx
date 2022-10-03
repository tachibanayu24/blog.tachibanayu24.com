import { Link } from "@remix-run/react";
import { format } from "date-fns";

type Props = {
  title: string;
  body: string;
  src: string;
  category: string;
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
      className="block h-[320px] w-[480px] p-2 rounded-lg bg-slate-200 shadow-lg"
      to={src}
    >
      <div className="flex justify-center bg-slate-100">
        <img src={eyecatch} className="h-[200px] rounded-lg" alt={title} />
      </div>
      <div className="p-3 flex flex-col items-cente justify-start gap-1">
        <p className="line-clamp-1 font-bold">{title}</p>
        <div className="flex justify-between font-thin text-sm">
          <p>{category}</p>
          <p>{format(publishedAt, "yyyy/MM/dd HH:mm")}</p>
        </div>
        <p className="line-clamp-2 text-sm">{body}</p>
      </div>
    </Link>
  );
};
