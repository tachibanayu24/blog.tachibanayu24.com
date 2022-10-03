type Props = {
  category: "diary" | "tech" | "finance" | "other";
};

const categories = {
  diary: { style: "bg-orange-300", emoji: "📚", text: "日記" },
  tech: { style: "bg-blue-300", emoji: "🤖", text: "Tech" },
  finance: { style: "bg-yellow-400", emoji: "💰", text: "ファイナンス" },
  other: { style: "bg-gray-200", emoji: "💭", text: "カテゴリーなし" },
};

export const CategoryBadge = ({ category }: Props) => {
  const { style, emoji, text } = categories[category];

  return (
    <div className={`${style}  py-1 px-2 rounded-full shadow-md`}>
      {emoji} {text}
    </div>
  );
};
