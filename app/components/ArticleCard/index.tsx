import { Link } from "@remix-run/react";

type Props = {
  title: string;
  body: string;
  src: string;
  imagePath?: string;
};

export const ArticleCard = ({ title, body, src, imagePath }: Props) => {
  return (
    <Link
      className="block h-[320px] w-[480px] p-2 pb-0 rounded-md bg-slate-200"
      to={src}
    >
      {imagePath ? <></> : <div className="h-[210px] bg-slate-300" />}
      <div className="p-4 flex flex-col items-cente justify-startr gap-1">
        <p className="line-clamp-1 font-bold">{title}</p>
        <p className="line-clamp-2 text-sm">{body}</p>
      </div>
    </Link>
  );
};
