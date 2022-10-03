export const Footer = () => {
  return (
    <footer className="p-6 text-xs font-thin bg-slate-50">
      <div className="flex justify-center items-center">
        <div className="pr-4 h-full text-right">blog.tachibanayu24.com</div>
        <div className="pl-4 text-left border-solid border-l-2 border-slate-300 dark:border-slate-600">
          <p>
            Published by{" "}
            <a
              href="https://tachibanayu24.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 font-bold"
            >
              Yuto Tachibana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
