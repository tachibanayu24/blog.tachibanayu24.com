type Props = {
  category: "diary" | "tech" | "finance" | "other";
};

const categories = {
  diary: { style: "bg-orange-300", emoji: "π", text: "ζ₯θ¨" },
  tech: { style: "bg-blue-300", emoji: "π€", text: "Tech" },
  finance: { style: "bg-yellow-400", emoji: "π°", text: "γγ‘γ€γγ³γΉ" },
  other: { style: "bg-gray-200", emoji: "π­", text: "γ«γγ΄γͺγΌγͺγ" },
};

export const CategoryBadge = ({ category }: Props) => {
  const { style, emoji, text } = categories[category];

  return (
    <div className={`${style}  py-1 px-2 rounded-full shadow-md text-xs`}>
      {emoji} {text}
    </div>
  );
};
