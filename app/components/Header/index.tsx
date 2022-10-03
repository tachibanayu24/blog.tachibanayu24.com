import { Link } from "@remix-run/react";
import me from "~/assets/images/me128.jpeg";

export const Header = () => {
  return (
    <div className="bg-white shadow-md px-4 py-2">
      <Link to="/" className="flex gap-2 items-center">
        <img src={me} alt="me" className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm text-gray-700">たちばなゆうとのブログ</p>
          <p className="text-xs text-gray-500 font-thin">
            tachibanayu24 / blog.tachibanayu24.com
          </p>
        </div>
      </Link>
    </div>
  );
};
